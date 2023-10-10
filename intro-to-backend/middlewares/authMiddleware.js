
const checkIfAuthTokenExists = (req, res, next) => {
  if (req.headers.token) {
    return next();
  } else {
    res.statusCode(401).json({ message: "User not authenticated" });
  }
},

// Middleware to intercept the request and pass it on the next set of middlewares

