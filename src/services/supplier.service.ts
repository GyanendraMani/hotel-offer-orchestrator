import { SupplierHotel } from "../types/hotel";

export class SupplierService {

  getSupplierAHotels(city: string): SupplierHotel[] {
    return [
      {
        hotelId: "a1",
        name: "Holtin",
        price: 6000,
        city: "delhi",
        commissionPct: 10,
        supplier: "Supplier A"
      },
      {
        hotelId: "a2",
        name: "Radison",
        price: 5900,
        city: "delhi",
        commissionPct: 13,
        supplier: "Supplier A"
      },
      {
        hotelId: "a3",
        name: "Taj Palace",
        price: 12000,
        city: "delhi",
        commissionPct: 15,
        supplier: "Supplier A"
      }
    ].filter(hotel => hotel.city === city.toLowerCase());
  }

  getSupplierBHotels(city: string): SupplierHotel[] {
    return [
      {
        hotelId: "b1",
        name: "Holtin", // overlap
        price: 5340,
        city: "delhi",
        commissionPct: 20,
        supplier: "Supplier B"
      },
      {
        hotelId: "b2",
        name: "Radison", // overlap
        price: 6200,
        city: "delhi",
        commissionPct: 12,
        supplier: "Supplier B"
      },
      {
        hotelId: "b3",
        name: "Leela Palace",
        price: 11000,
        city: "delhi",
        commissionPct: 18,
        supplier: "Supplier B"
      }
    ].filter(hotel => hotel.city === city.toLowerCase());
  }
}