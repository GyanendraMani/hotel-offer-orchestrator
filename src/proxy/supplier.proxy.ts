import axios from "axios";
import { SupplierHotel } from "../types/hotel";

const BASE_URL = process.env.APP_URL || "http://localhost:3000";

export class SupplierProxy {
  async fetchSupplierA(city: string): Promise<SupplierHotel[]> {
    const res = await axios.get(`${BASE_URL}/supplierA/hotels`, {
      params: { city },
    });

    return res.data;
  }

  async fetchSupplierB(city: string): Promise<SupplierHotel[]> {
    const res = await axios.get(`${BASE_URL}/supplierB/hotels`, {
      params: { city },
    });

    return res.data;
  }
}