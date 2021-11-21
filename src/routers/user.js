import { Router } from 'express'
import UserController from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/login', UserController.login)
userRouter.post('/register', UserController.register)
userRouter.post('/update-info', UserController.update)

export default userRouter
