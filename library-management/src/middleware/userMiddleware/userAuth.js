import jwt from "jsonwebtoken";

export const userAuth = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.json({ message: "Please register first" });
  }

  const decoded = jwt.verify(token, "secretKey");
  req.auth = decoded;
  next();
};
