import { createClient } from "redis";
import { Hotel } from "../types/hotel";

export class RedisService {
  private client;

  constructor() {
    const url = process.env.REDIS_URL || "redis://localhost:6379";

    console.log("Redis connecting to:", url);

    this.client = createClient({ url });

    this.client.on("error", (err) => {
      console.error("Redis Client Error", err);
    });

    this.client.connect().catch(console.error);
  }

  async saveHotels(city: string, hotels: Hotel[]) {
    const key = `hotels:${city}`;
    await this.client.set(key, JSON.stringify(hotels));
  }

  async getHotels(city: string): Promise<Hotel[] | null> {
    const key = `hotels:${city}`;
    const data = await this.client.get(key);

    if (!data) return null;

    return JSON.parse(data);
  }
}