import S3 from "aws-sdk/clients/s3";

const s3 = new S3({
  credentials: {
    accessKeyId: process.env.MINIO_ROOT_USER || "MINIO_ID",
    secretAccessKey: process.env.MINIO_ROOT_PASSWORD || "MINIO_KEY",
  },
  endpoint: process.env.MINIO_HOST || "http://minio:9000",
  s3ForcePathStyle: true,
});

export default s3;
