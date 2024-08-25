import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  getAllMovie,
  updateMovie,
} from "../controller/moviePrisma.controller";

export const movieRouter = Router();

movieRouter.get("/", getAllMovie);
movieRouter.post("/:userId", createMovie);
movieRouter.patch("/", updateMovie);
movieRouter.delete("/:userId", deleteMovie);
