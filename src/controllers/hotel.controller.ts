import { Request, Response } from "express";
import { HotelService } from "../services/hotel.service";

export class HotelController {
  private hotelService = new HotelService();

  getHotels = async (req: Request, res: Response) => {
    try {
      const city = req.query.city as string;

      if (!city) {
        return res.status(400).json({ message: "city is required" });
      }

      const minPrice = req.query.minPrice
        ? Number(req.query.minPrice)
        : undefined;

      const maxPrice = req.query.maxPrice
        ? Number(req.query.maxPrice)
        : undefined;

      const result = await this.hotelService.getHotels(
        city,
        minPrice,
        maxPrice
      );

      return res.json(result);
    } catch (error) {
      console.error("Error in getHotels:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}