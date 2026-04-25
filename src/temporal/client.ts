import { Connection, Client } from "@temporalio/client";

export async function createTemporalClient() {
  const address = process.env.TEMPORAL_ADDRESS || "127.0.0.1:7233";
  console.log("Temporal connecting to:", address);
  const connection = await Connection.connect({
    address: address
  });

  return new Client({ connection });
}