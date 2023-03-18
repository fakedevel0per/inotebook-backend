var jwt = require('jsonwebtoken');
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SIGN;

// require('dotenv').config({ path: '../../.env.local' });
// const JWT_SECRET = process.env.REACT_APP_JWT_SECRET;
// console.log("jwt"+JWT_SECRET);
const fetchUser = (req, res, next) => {
    // GET THE USER FORM THE JWT TOKEN AND ADD ID TO REQ OBJECT 
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
}

module.exports = fetchUser;