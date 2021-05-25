import express from "express";
import {edit, removeUser, see, logout} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(":id", see);
userRouter.get("/edit", edit);
userRouter.get("/delete", removeUser);
userRouter.get("/logout", logout);


export default userRouter;

