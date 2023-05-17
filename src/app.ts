// ! cojur => cors> json>urlEconded>route

import { Application, Request, Response } from "express";
import express from "express";
import userRoute from './app/modules/user/user.route'
import cors from "cors";

const app:Application = express();
app.use()
app.use(express.json())
app.use('/chk', userRoute)
app.get("/", (req:Request, res:Response) => {
  res.send({
    name: "shah",
    age: 20,
  });
});

export default app