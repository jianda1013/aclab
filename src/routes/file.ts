import { Express } from "express";
import Multer from "multer";
import { uploadPaper } from "../functions/file";

const memDest = Multer({ storage: Multer.memoryStorage() }).single("file");

export default (app: Express) => {
  app.post("/paper", memDest, (req, res) => {
    uploadPaper(req.body.year, req.file, req.body.name)
      .then((msg) => res.json({ msg }))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err });
      });
  });
};
