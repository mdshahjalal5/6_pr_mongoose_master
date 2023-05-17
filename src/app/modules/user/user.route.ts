// ! rup => router> pogud> post> get> update> delete 
import { NextFunction, Request, Response } from "express";
import express from "express";
import { get_user } from "./user.controller";



// !router 
const router = express.Router();



// !post get update delete 
router.get("/", get_user  );

export default router;