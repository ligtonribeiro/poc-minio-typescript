import { ClientOptions, Client } from 'minio';

const minioClientOpt: ClientOptions = {
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'minio',
  secretKey: 'minio123',
};

export const minioClient = new Client({ ...minioClientOpt });