import db from "../../../utils/dbConnect"
import User from "../../../models/user.model"

const handler = async (req, res) => {
    const { method } = req
    await db()
    switch (method) {
        case 'POST':
            User.findOne({ $or: [{ email: req.body.id }, { username: req.body.id }] }, (err, user) => {
                if (err || !user) return res.status(500).send({ success: false, message: 'UserName or Password not correct' });
                const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                if (!passwordIsValid) return res.status(401).send({ success: false, token: null, message: "Somethings wrong!" });
                const token = jwt.sign({ id: user._id, type: 'user', username: user.username }, process.env.JWT_KEY, {
                    expiresIn: 86400
                });
                res.status(200).send({ success: true, token: token, currentUser: user });
            });
            break
        default:
            res.status(400).json({ success: false, message })
            break
    }
}

export default handler