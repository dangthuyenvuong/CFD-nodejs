import { Sequelize } from 'sequelize'
import { sequelize } from './base.model.js'

export const Category = sequelize.define('categories', {
    name: {
        type: Sequelize.STRING,
        field: 'name'
    },
    slug: {
        type: Sequelize.STRING,
        field: 'slug',
    }
}, {
    freezeTableName: true
})

export default Category