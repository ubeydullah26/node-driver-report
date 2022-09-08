const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(httpStatus.UNAUTHORIZED).json({ error: 'Please login!' });
    jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
        if (err) return res.status(httpStatus.FORBIDDEN).json({ error: 'Token invalid!' });
        req.user = user?._doc;
        next();
    });
}

module.exports = authenticateToken;