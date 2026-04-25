import { Router } from "express";
import { SupplierController } from "../controllers/supplier.controller";

const router = Router();
const controller = new SupplierController();

router.get("/supplierA/hotels", controller.getSupplierAHotels);
router.get("/supplierB/hotels", controller.getSupplierBHotels);

export default router;