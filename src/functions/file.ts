import s3 from "../minio";

export const getCourse = (path: string) => {
  s3.getObject({ Bucket: "test", Key: "first/second/OUO.txt" }, (err, data) => {
    console.log(data.Body?.toString("utf-8"));
  });
};
