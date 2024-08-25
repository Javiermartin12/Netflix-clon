import { Router } from "express";
import { getAllGenres, createGenres} from "../controller/genrePrisma.controller";

export const genreRouter = Router()

genreRouter.get("/", getAllGenres)
genreRouter.post("/", createGenres)
// genreRouter.patch("/", updateGenre)
// genreRouter.delete("/", deleteGenre)