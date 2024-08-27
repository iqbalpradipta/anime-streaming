import { Request, Response } from "express";
import UserService from "../service/User";
import { error } from "console";

export default new (class UserController {
  async GetAllUsers(req: Request, res: Response) {
    try {
      const response = await UserService.GetAllUsers();

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async GetUserByName(req: Request, res: Response) {
    try {
      const name = req.params.name;

      const response = await UserService.GetUsersByName(name);

      if (response.status == "failed") {
        res.status(500).json(response);
      } else {
        res.status(200).json(response);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async UpdateUser(req: Request, res: Response) {
    try {
      const email = req.params.email;
      const body = req.body;

      const response = await UserService.UpdateUsers(email, body);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async DeleteUser(req: Request, res: Response) {
    try {
      const email = req.params.email;

      const response = await UserService.DeleteUser(email);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();
