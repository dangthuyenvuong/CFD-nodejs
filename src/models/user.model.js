import { Sequelize } from 'sequelize'
import { sequelize } from './base.model.js'


export const User = sequelize.define('users', {
    fullName: {
        type: Sequelize.STRING,
        field: 'full_name',
        allowNull: true,
    },
    avatar: {
        type: Sequelize.STRING,
        field: 'avatar',
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        field: 'email',
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        field: 'password'
    },
    createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
    },
    updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at'
    },
}, {
    // updatedAt: false,
    // createdAt: false,
    freezeTableName: true
})

export default User