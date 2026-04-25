import { Router } from "express";
import healthRoutes from "./health.routes";
import supplierRoutes from "./supplier.routes";
import hotelRoutes from "./hotel.routes";

const router = Router();

router.use("/health", healthRoutes);
router.use("/", supplierRoutes);
router.use("/api", hotelRoutes);

export default router;