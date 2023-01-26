module.exports = (req, res, next) => {
  if (req.path === "/auth") next();
  else if (req.get("token") === undefined) {
    return res.status(401).json({
      message: "unauthorized",
    });
  } else if (
    req.get("token") !==
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YzQwODJjYi03YjUxLTQyMDItODQ2NS0xNDVmZTFjZmEzZmMiLCJleHAiOjM2MDB9.He2nEHNNjmMeijZqdM-T3XWzubOTeD4wGsFd0YDOzII"
  ) {
    return res.status(401).json({
      message: "invalid token",
    });
  } else {
    next();
  }
};
