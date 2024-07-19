import User from "../../../db/models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { username, password, role } = req.body;


  const userMatched = await User.findOne({
    where: {
      username
    }
  });

  if (userMatched) {
    return res.json({
      message:
        "User already exists",
    });
  }

  const user = await User.create({ username, password, role });

  res.json({ message: "User registered", user });

};

export const login = async (req, res) => {
  const { username, password } = req.body;


  const user = await User.findOne({
    where: {
      username
    }
  });

  if (!user) {
    return res.json({ message: "User doesn't exist" });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) return res.json({ message: "Invalid password" });

  const token = jwt.sign({ user }, "secretKey");

  res.json({ message: "logged in", token });

};
