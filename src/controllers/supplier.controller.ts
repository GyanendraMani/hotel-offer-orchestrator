import { Request, Response } from "express";
import { SupplierService } from "../services/supplier.service";

export class SupplierController {
  private supplierService = new SupplierService();

  getSupplierAHotels = (req: Request, res: Response) => {
    const city = req.query.city as string;
    const data = this.supplierService.getSupplierAHotels(city);
    res.json(data);
  };

  getSupplierBHotels = (req: Request, res: Response) => {
    const city = req.query.city as string;
    const data = this.supplierService.getSupplierBHotels(city);
    res.json(data);
  };
}