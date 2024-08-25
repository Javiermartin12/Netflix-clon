import { Request, Response } from "express";
import { prisma } from "../db/client";

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const allUsers = await prisma.user.findMany();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name: name, email: email, password: password },
    });
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const  userId  = parseInt(req.params.userId)
  try {
    const userUpdated = await prisma.user.update({
      where: { id: userId },
      data: {name, email, password},
    });
    res.status(200).send(userUpdated);
    console.log(userUpdated);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  //const {userid} = req.params: Esto desestructura el objeto params dentro del objeto req y extrae la propiedad userid. Esto se hace asumiendo que la solicitud contiene un parámetro llamado userid. Los parámetros de la solicitud son típicamente utilizados para enviar datos desde el cliente al servidor, como en este caso, el ID del usuario que se va a eliminar.
   const  userId  = parseInt(req.params.userId)

  try {
    const userDeleted = await prisma.user.delete({
      where :{ id: userId },
    });
    res.status(200).send(userDeleted);
  } catch (error) {
    res.status(400).send(error);
  }
};
