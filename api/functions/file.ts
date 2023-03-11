import s3 from "../minio";
import Multer from "multer";
import { Express } from "express";
import knex from "../db";

// export const getCourse = (path: string) => {
//   s3.getObject({ Bucket: "test", Key: "first/second/OUO.txt" }, (err, data) => {
//     console.log(data.Body?.toString("utf-8"));
//   });
// };

export const getMinio = async (Bucket: "paper" | "course", Key: string) => {
  return new Promise((resolve, reject) => {
    s3.getSignedUrl("getObject", { Bucket, Key }, (err, data) => {
      if (err) return reject(err);
      data = data.replace("minio:9000", process.env.MINIO_PROXY_HOST || "minio:9000");
      resolve(data);
    });
  });
};

export const toMinio = async (Bucket: "paper" | "course", Key: string, Body: Buffer) => {
  return new Promise<string>((resolve, reject) => {
    s3.upload({ Bucket, Key, Body }, (err, data) => {
      if (err) return reject(err.message);
      resolve(data.Key);
    });
  });
};

export const uploadPaper = async (year: number, file?: Express.Multer.File, name?: string) => {
  if (file === undefined) return `FILE_NOT_FOUND`;
  if (!name) name = file.originalname;
  await toMinio("paper", `${year}/${name}`, file.buffer);
  let file_id = (await knex("file").insert({ bucket: "paper", name, path: `${year}/${name}` }))[0];
  await knex("paper").insert({ file_id, year });
  let paper_url = await getMinio("paper", `${year}/${name}`);
  return { pdf: paper_url, name };
};
