import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "../activities/hotel.activity";
import { mergeAndDeduplicateHotels } from "../../biz/hotel.logic";

const { fetchSupplierA, fetchSupplierB } = proxyActivities<typeof activities>({
  startToCloseTimeout: "10 seconds",
});

export async function hotelWorkflow(city: string) {

  const [supplierA, supplierB] = await Promise.all([
    fetchSupplierA(city),
    fetchSupplierB(city),
  ]);

  // Merge + deduplicate
  const result = mergeAndDeduplicateHotels(supplierA, supplierB);

  return result;
}