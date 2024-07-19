
export const checkAdmin = (req, res, next) => {
  const {role} = req.auth.user

  if (role != "admin") {
    return res.json({message : "Not authorized"})
  } 

  next()
}