import { Router } from "express";
import { createUser, deleteUser, getAllUser, updateUser } from "../controller/userPrisma.controller";

export const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.post("/", createUser);
userRouter.patch("/:userId", updateUser);
userRouter.delete("/:userId",deleteUser);