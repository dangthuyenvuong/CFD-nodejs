import { Router } from 'express'
import AuthController from '../controllers/auth.controller.js'
const authRouter = Router()


authRouter.post('/login',AuthController.login)
authRouter.post('/refresh-token', AuthController.refreshToken)
authRouter.post('/register', AuthController.register)


export default authRouter
