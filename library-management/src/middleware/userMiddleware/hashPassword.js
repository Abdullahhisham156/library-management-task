import bcrypt from "bcryptjs"

export const hashPassword = (req, res, next) => {
  let {password } = req.body;

  let hashedPassword = bcrypt.hashSync(password, 10)
  password = hashedPassword

  req.body = { 
    ...req.body,
    password
  }

  next()
}