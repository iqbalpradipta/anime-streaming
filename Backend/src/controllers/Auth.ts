import { Request, Response } from "express";
import AuthService from "../service/Auth";
import bcrypt from 'bcrypt'

export default new class AuthController {
    async Register(req: Request, res: Response) {
        try {
            const data = req.body
            data.password = bcrypt.hashSync(req.body.password, 10)
            const response = await AuthService.Register(data)

            if(response.status === "failed") {
                res.status(500).json(response)
            } else {
                res.status(200).json(response)
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async Login(req: Request, res: Response) {
        try {
            const data = {
                email: req.body.email,
                password: req.body.password
            }
            const response = await AuthService.Login(data as any)

            if(response.status === "failed") {
                res.status(500).json(response)
            } else {
                res.status(200).json(response)
            }

        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}