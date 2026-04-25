import { SupplierProxy } from "../../proxy/supplier.proxy";

const proxy = new SupplierProxy();

export async function fetchSupplierA(city: string) {
  return proxy.fetchSupplierA(city);
}

export async function fetchSupplierB(city: string) {
  return proxy.fetchSupplierB(city);
}