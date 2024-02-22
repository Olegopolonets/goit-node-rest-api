import express from "express";

import authController from "../controllers/authControllers.js";

import validateBody from "../helpers/validateBody.js";

import { signupSchema, signinSchema } from "../schemas/userSchemas.js";

const authRouter = express.Router();

authRouter.post("/signup", validateBody(signupSchema), authController.signup);

authRouter.post("/signin", validateBody(signinSchema), authController.signin);

export default authRouter;
