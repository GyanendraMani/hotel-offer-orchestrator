import { Worker, NativeConnection } from "@temporalio/worker";

async function run() {
  const connection = await NativeConnection.connect({
    address: process.env.TEMPORAL_ADDRESS,
  });

  const worker = await Worker.create({
    connection,
    workflowsPath: require.resolve("./workflows/hotel.workflow"),
    activities: require("./activities/hotel.activity"),
    taskQueue: "hotel-task-queue",
  });

  await worker.run();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});