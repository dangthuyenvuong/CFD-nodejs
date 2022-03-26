import { Sequelize } from 'sequelize'
import { sequelize } from './base.model.js'

export const Brand = sequelize.define('brands', {
    name: {
        type :Sequelize.STRING,
        field: 'name'
    }
}, {
    freezeTableName: true
})

export default Brand



// 1 - M
// // 1 - M
// // M - 1
// M - M

// product_cateogry
// product_id
// category_id


// SELECT product.*
// FROM product
// JOIN product_cateogry on product.id = product_cateogry.product_id
// JOIN category on category.id = product_cateogry.category_id


