import { Router } from "express";
import { HotelController } from "../controllers/hotel.controller";

const router = Router();
const controller = new HotelController();

router.get("/hotels", controller.getHotels);

export default router;