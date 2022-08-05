import { minioClient } from "./config.minio";
import { Request, Response } from "express";
import express from "express";

const server = express();
server.use(express.json());

server.post("/presignedUrl", async (req: Request, res: Response) => {
  const file = req.body.name;
  console.log(file);
  await minioClient.presignedPutObject("uploads", file, (err, url) => {
    if (err) throw err;
    res.json(url);
  });
});

server.get("/getPresignedUrl", async (req: Request, res: Response) => {
  let file = req.query.file as string;
  await minioClient.presignedGetObject(
    "eyelab-bkt",
    `dataCollector/${file}`,
    48 * 60 * 60,
    (err, url) => {
      if (err) throw err;
      res.json(url);
    }
  );
});

server.listen(8000, () => {
  console.log("🚀 Server is running!!!!");
});
