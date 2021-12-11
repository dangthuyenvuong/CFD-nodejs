import jwt from 'jsonwebtoken'
import { ACCESS_KEY, BAD_REQUEST, UNAUTHORIZED } from '../config/index.js'
import User from '../models/user.model.js'

const authMiddleware = async (req, res, next) => {
    try {
        let { authorization } = req.headers
        if (authorization) {
            const [, token] = authorization.split(' ')
            const data = jwt.verify(token, ACCESS_KEY)
            if (data) {
                const user = await User.findByPk(data.id, {
                    attributes: ['fullName', 'avatar', 'id', 'email', 'createdAt', 'updatedAt']
                })
                if (user) {
                    req.user = user
                    return next()
                }
                throw { error: 'Server error' }
            }
        }
    } catch (error) {
        return res.status(BAD_REQUEST)
            .json({
                status: BAD_REQUEST,
                error
            })
    }

    return res.status(UNAUTHORIZED)
        .json({
            status: UNAUTHORIZED,
            error: 'UNAUTHORIZED'
        })
}

export default authMiddleware