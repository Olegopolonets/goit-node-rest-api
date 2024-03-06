import User from "../models/User.js";
import bcrypt from "bcrypt";

export const signup = async (data, avatar) => {
  const { password } = data;
  const hashPassword = await bcrypt.hash(password, 10);
  return User.create({ ...data, password: hashPassword, photo: avatar });
};

export const setToken = (id, token = "") => User.findByIdAndUpdate(id, { token });
