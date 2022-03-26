import { Sequelize } from 'sequelize'
import { sequelize } from './base.model.js'
import Brand from './brand.model.js'
import Category from './cateogry.model.js'


export const Product = sequelize.define('product', {
    name: {
        type: Sequelize.STRING,
        field: 'name',
    },
    thumbnail: {
        type: Sequelize.STRING,
        field: 'thumbnail'
    },
    shortDescription: {
        type: Sequelize.STRING,
        field: 'short_description'
    },
    regularPrice: {
        type: Sequelize.NUMBER,
        field: 'regular_price'
    },
    finalPrice: {
        type: Sequelize.NUMBER,
        field: 'final_price'
    },
    slug: {
        type: Sequelize.STRING,
        field: 'slug'
    },
    media: {
        type: Sequelize.STRING,
        get(){
            return this.getDataValue('media').split(';')
        },
        set(val){
            this.setDataValue('media', val.join(';'))
        }
    },
    question: {
        type: Sequelize.STRING,
        field: 'question'
    },
    description: {
        type: Sequelize.STRING,
        field: 'description'
    },
    sku: {
        type: Sequelize.STRING,
        unique: true,
        field: 'sku'
    },
    inventoryCount: {
        type: Sequelize.NUMBER,
        field: 'inventory_count'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    },
    // brand_id: {
    //     type: Sequelize.NUMBER,
    // }
})

Brand.hasMany(Product)
Category.hasMany(Product)

Product.hasOne(Brand)
Product.hasOne(Category)

export default Product