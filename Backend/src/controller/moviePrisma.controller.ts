import { Request, Response } from "express";
import { prisma } from "../db/client";


export const getAllMovie = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  try {
    const allMovies = await prisma.movies.findMany();
    res.status(200).send(allMovies);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createMovie = async (req: Request, res: Response) => {
  const { name, image } = req.body;
  const userid  = parseInt(req.params.userId)
  try {
    const movie = await prisma.movies.create({ 
      data: {name, image, user:{connect : {id:userid}} }
    });
    res.status(200).send(movie);
  } catch (error) {
    res.status(400).send(error);
  }
};


export const updateMovie = async(req: Request, res: Response) => {
  const {name,image} = req.body
  const  userId  = parseInt(req.params.userId)
  try {
    const updatedMovie = await prisma.movies.update({where: { id: userId },
      data: {name, image},})
    res.status(200).send(updatedMovie)
  } catch (error) {
    res.status(400).send(error)
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const  userId  = parseInt(req.params.userId)
  try {
    const deletedMovie = await prisma.movies.delete({ where :{ id: userId },})
    res.status(200).send(deletedMovie)
  } catch (error) {
    res.status(400).send(error)
  }
 
};
