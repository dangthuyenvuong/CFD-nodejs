import md5 from 'md5'
import { BAD_REQUEST, ACCESS_KEY, TOKEN_EXPRIED, REFRESH_KEY, REFRESH_EXPRIED } from '../config/index.js'
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import { httpResposeAuth } from '../utils/httpResponse.js'


const generateAccessToken = (user) => jwt.sign({
    email: user.email,
    id: user.id
}, ACCESS_KEY, { expiresIn: TOKEN_EXPRIED })

const generateRefreshToken = (user) => jwt.sign({
    email: user.email,
    id: user.id
}, REFRESH_KEY, { expiresIn: REFRESH_EXPRIED })

const AuthController = {
    async login(req, res) {
        let { email, password } = req.body

        if (!email || !password) {
            return res.status(BAD_REQUEST)
                .json({
                    status: BAD_REQUEST,
                    error: 'Email and password are required'
                })
        }

        const user = await User.findOne({
            where: {
                email,
                password: md5(password)
            }
        })

        if (user) {
            const token = generateAccessToken(user)
            const refresh = generateRefreshToken(user)

            return res.json(httpResposeAuth(token, refresh))
        }

        return res.status(BAD_REQUEST)
            .json({
                status: BAD_REQUEST,
                error: 'Email or Password are wrong'
            })
    },
    async register(req, res) {
        let { email, password, fullName } = req.body

        if (!email || !password || !fullName) {
            return res.status(BAD_REQUEST)
                .json({
                    status: BAD_REQUEST,
                    error: 'Email, password and fullName are required'
                })
        }

        try {
            const check = await User.findOne({
                where: {
                    email
                }
            })

            if (check) {
                return res.status(BAD_REQUEST)
                    .json({
                        status: BAD_REQUEST,
                        error: 'Email exists'
                    })
            }

            const user = await User.create({
                email,
                fullName,
                password: md5(password)
            }, { validate: true })

            if (user) {
                const token = generateAccessToken(user)
                const refresh = generateRefreshToken(user)
                return res.json(httpResposeAuth(token, refresh))
            }

            return res.status(BAD_REQUEST)
                .json({
                    status: BAD_REQUEST,
                    error: 'Server error'
                })

        } catch (error) {
            return res.status(BAD_REQUEST)
                .json({
                    status: BAD_REQUEST,
                    error
                })
        }

    },
    refreshToken(req, res) {
        try {
            let { refreshToken } = req.body
            const data = jwt.verify(refreshToken, REFRESH_KEY)

            if (data) {
                const token = generateAccessToken(data)
                return res.json(httpResposeAuth(token))
            }

            return res.status(BAD_REQUEST)
                .json({
                    status: BAD_REQUEST,
                    error: 'Server error'
                })
        } catch (error) {
            return res.status(BAD_REQUEST)
                .json({
                    status: BAD_REQUEST,
                    error
                })
        }
    },
}

export default AuthController