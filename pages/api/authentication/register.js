import db from "../../../utils/dbConnect"
import User from "../../../models/user.model"
const bcrypt = require('bcryptjs')

const handler = async (req, res) => {
    const { method } = req
    await db()
    switch (method) {
        case 'POST':
            try {
                const body = req.body;
                body.password = bcrypt.hashSync(body.password, 8);
                console.log(body)
                const user = await User.create(body)
                const token = jwt.sign({ _id: user._id, username: user.username, email: user.email, phone: user.phone }, process.env.JWT_KEY, {
                    expiresIn: 86400
                });
                res.status(200).send({ auth: true, token: token, currentUser: user });
            } catch (err) {
                res.status(500).send(err)
            }
            break
        default:
            res.status(400).json({ success: false, message })
            break
    }
}

export default handler