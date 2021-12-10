import { Router } from 'express'
import UserController from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/login', UserController.login)
userRouter.post('/register', UserController.register)
userRouter.post('/update-info', UserController.update)

// userRouter.get('/demo', UserController.demo)



userRouter.get('/:id?', UserController.get)
userRouter.post('/', UserController.create)
userRouter.put('/:id', UserController.update)
userRouter.delete('/:id', UserController.delete)

export default userRouter
