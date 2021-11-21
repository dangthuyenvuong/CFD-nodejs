import { Router } from 'express'
import ShopController from '../controllers/shop.controller.js'

const shopRouter = Router()

shopRouter.get('/products', ShopController.products)
shopRouter.get('/categories', ShopController.categories)

export default shopRouter
