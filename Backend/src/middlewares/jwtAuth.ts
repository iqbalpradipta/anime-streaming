import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default new (class JWTAuth {
  Authentication(req: Request, res: Response, next: NextFunction) {
    const  authorization  = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({ messages: "You need token first" });
    }

    const token = authorization.split(" ")[1];
    const secret = process.env.TOKEN_PRIVATE_KEY;

    try {
      const jwtLogin = jwt.verify(token, secret as string);

      res.locals.loginSession = jwtLogin;
      next();
    } catch (error) {
      throw error;
    }
  }
})();
