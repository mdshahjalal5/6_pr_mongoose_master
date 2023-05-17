// import { NextFunction, Request, Response } from "express";

// const get_user = (req:Request, s:Response, n:NextFunction) =>{
//     s.send(
//         {name:'shah',
//         age:19
//     }
//     )
// }

// export default {
//     get_user, 
// }

import { NextFunction, Request, Response } from "express";

export const get_user = (req: Request, res: Response, next: NextFunction) => {
  res.send({
    name: "shah",
    age: 19,
  });
};

