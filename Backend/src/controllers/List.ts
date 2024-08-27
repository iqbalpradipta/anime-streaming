import { Request, Response } from "express";
import ListService from "../service/List";

export default new class ListController {
    async CreateList(req: Request, res: Response) {
        try {
            const data = req.body

            const response = await ListService.CreateList(data)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async GetAllList(req: Request, res: Response) {
        try {
            const response = await ListService.GetAllList()

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async GetListById(req: Request, res: Response) {
        try {
            const id = req.params.id
             
            const response = await ListService.GetListById(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async UpdateList(req: Request, res: Response) {
        try {
            const id = req.params.id
            const data = req.body
             
            const response = await ListService.UpdateList(id, data)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async DeleteList(req: Request, res: Response) {
        try {
            const id = req.params.id
             
            const response = await ListService.DeleteList(id)

            res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}