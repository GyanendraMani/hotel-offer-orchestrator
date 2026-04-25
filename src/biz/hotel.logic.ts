import { Hotel } from "../types/hotel";

export function mergeAndDeduplicateHotels(
  supplierA: Hotel[],
  supplierB: Hotel[]
): Hotel[] {
  const merged = [...supplierA, ...supplierB];

  const hotelMap = new Map<string, Hotel>();

  for (const hotel of merged) {
    const existing = hotelMap.get(hotel.name);

    // If not present -> add
    if (!existing) {
      hotelMap.set(hotel.name, {
        name: hotel.name,
        price: hotel.price,
        commissionPct: hotel.commissionPct,
        supplier: hotel.supplier
      });
    } else {
      // If present -> keep cheaper one
      if (hotel.price < existing.price) {
        hotelMap.set(hotel.name, {
          name: hotel.name,
          price: hotel.price,
          commissionPct: hotel.commissionPct,
          supplier: hotel.supplier
        });
      }
    }
  }

  return Array.from(hotelMap.values());
}