import { Request, Response } from "express";
import MovieService from "../service/Movie";

export default new (class MovieController {
  async CreateMovie(req: Request, res: Response) {
    try {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };

      const data = {
        title: req.body.title,
        desc: req.body.desc,
        img: files["img"] ? files["img"][0].path : "",
        imgTitle: files["imgTitle"] ? files["imgTitle"][0].path : "",
        imgSm: files["imgSm"] ? files["imgSm"][0].path : "",
        trailer: req.body.trailer,
        video: files["video"] ? files["video"][0].path : "",
        year: req.body.year,
        limit: parseInt(req.body.limit, 10),
        genre: req.body.genre,
      };

      const response = await MovieService.CreateMovie(data);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async GetAllMovie(req: Request, res: Response) {
    try {
      const response = await MovieService.GetAllMovie();

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async GetMovieById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const response = await MovieService.GetMovieById(id);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async UpdateMovie(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const data = req.body;

      const response = await MovieService.UpdateMovie(id, data);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async DeleteMovie(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const response = await MovieService.DeleteMovie(id);

      res.status(200).json(response);
    } catch (error) {
      res.status(500).json(error);
    }
  }
})();
