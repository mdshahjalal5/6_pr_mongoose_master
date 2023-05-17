import { NextFunction, Request, Response } from "express";
import express from "express";
import { get_user } from "./user.controller";

const router = express.Router();

router.get("/", get_user  );

export default router;