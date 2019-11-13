
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
const token = req.headers.authorization;

  if (token) {
    // check that the token is valid
    const secret = process.env.JWT_SECRET || 'is it secret, is it safe?';
    
    jwt.verify(token, secret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({message: 'Invalid credentials'});
      } else {
        req.decodeJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};
