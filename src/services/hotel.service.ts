import { RedisService } from "./redis.service";
import { createTemporalClient } from "../temporal/client";
import { Hotel } from "../types/hotel";

export class HotelService {
  private redisService = new RedisService();
  private clientPromise = createTemporalClient();

  async getHotels(city: string, minPrice?: number, maxPrice?: number) {
    const client = await this.clientPromise;

    let hotels = await this.redisService.getHotels(city);

    if (!hotels) {
      const handle = await client.workflow.start("hotelWorkflow", {
        args: [city],
        taskQueue: "hotel-task-queue",
        workflowId: `hotel-${Date.now()}`
      });

      const freshHotels = await handle.result();

      await this.redisService.saveHotels(city, freshHotels);
      hotels = freshHotels;
    }

    let result: Hotel[] = hotels!;

    if (minPrice !== undefined) {
      result = result.filter(h => h.price >= minPrice);
    }

    if (maxPrice !== undefined) {
      result = result.filter(h => h.price <= maxPrice);
    }

    return result;
  }
}