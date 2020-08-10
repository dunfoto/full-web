const jwt = require('jsonwebtoken');
const debug = console.log.bind(console);

export default async (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (token) {
        try {
            await jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
                if (err) return res.status(401).json({ success: false, message: 'Unauthorized.' });
                next(req, res);
            });
        } catch (error) {
            debug("Error while verify token:", error);
            return res.status(500).send({ success: false, message: 'Failed to authenticate token.' });
        }
    } else {
        return res.status(403).send({
            message: 'No token provided.',
        });
    }
}