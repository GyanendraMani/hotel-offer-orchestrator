export interface SupplierHotel {
  hotelId: string;
  name: string;
  price: number;
  city: string;
  commissionPct: number;
  supplier: string;
}

export interface Hotel {
  name: string;
  price: number;
  commissionPct: number;
  supplier: string;
}