import { Router } from "express";

const router = Router();

const serverStartTime = new Date();

router.get("/", (req, res) => {
  const localTime = serverStartTime.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata"
  });

  res.json({
    status: "OK",
    message: `Service is running from : ${localTime}`
  });
});

export default router;