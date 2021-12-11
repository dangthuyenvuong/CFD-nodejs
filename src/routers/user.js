import { Router } from 'express'
import UserController from '../controllers/user.controller.js'
import authMiddleware from '../middleware/auth.middleware.js'
import fileMiddlware from '../middleware/file.middleware.js'

const userRouter = Router()

// userRouter.post('/login', UserController.login)
// userRouter.post('/register', UserController.register)
userRouter.put('/update-info', authMiddleware, fileMiddlware.single('avatar'), UserController.update)

// userRouter.get('/demo', UserController.demo)


userRouter.get('/', authMiddleware, UserController.get)
// userRouter.post('/', UserController.create)
// userRouter.put('/:id', UserController.update)
// userRouter.delete('/:id', UserController.delete)

export default userRouter
