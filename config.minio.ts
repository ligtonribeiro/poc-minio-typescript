import { ClientOptions, Client } from "minio";

const minioClientOpt: ClientOptions = {
  endPoint: "minio.appeyelab.com.br",
  port: 443,
  useSSL: true,
  accessKey: "eyelabminio",
  secretKey: "eyelab@2021",
};

export const minioClient = new Client({ ...minioClientOpt });
