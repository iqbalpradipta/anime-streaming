import { NextFunction, Request, Response } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    cb(null, "./src/upload");
  },
  filename: function (req: Request, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ 
    storage: storage,
}).fields([
    { name: 'img', maxCount: 1 },
    { name: 'imgTitle', maxCount: 1 },
    { name: 'imgSm', maxCount: 1 },
    { name: 'video', maxCount: 1 }
]);

export default upload;