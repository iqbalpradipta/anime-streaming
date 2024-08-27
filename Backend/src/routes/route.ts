import express from 'express'
import AuthController from '../controllers/Auth'
import jwtAuth from '../middlewares/jwtAuth'
import UserController from '../controllers/User'
import MovieController from '../controllers/Movie'
import ListController from '../controllers/List'
import upload from '../middlewares/uploadFile'

const router = express.Router()

//Auth
router.post("/users/register", jwtAuth.Authentication, AuthController.Register)
router.post("/users/login", AuthController.Login)

//Users
router.get("/users", UserController.GetAllUsers)
router.get("/users/:name", UserController.GetUserByName)
router.patch("/users/:email", UserController.UpdateUser)
router.delete("/users/:email", UserController.DeleteUser)

// Movie
router.post("/movie", upload ,MovieController.CreateMovie)
router.get("/movie", MovieController.GetAllMovie)
router.get("/movie/:id", MovieController.GetMovieById)
router.patch("/movie/:id", MovieController.UpdateMovie)
router.delete("/movie/:id", MovieController.DeleteMovie)

// List
router.post("/List", ListController.CreateList)
router.get("/List", ListController.GetAllList)
router.get("/List/:id", ListController.GetListById)
router.patch("/List/:id", ListController.UpdateList)
router.delete("/List/:id", ListController.DeleteList)

export default router