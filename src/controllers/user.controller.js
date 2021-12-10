
import { User } from '../models/user.model.js'
import { BAD_REQUEST } from '../config/index.js'
import sequelize from '../models/base.model.js'
import { Sequelize } from 'sequelize'

const { Op } = Sequelize
const UserController = {
    login(req, res) {

        res.json({
            login: true
        })
    },
    register(req, res) {
        res.json({
            register: true
        })
    },
    update(req, res) {
        res.json({
            update: true
        })
    },
    async demo(req, res) {
        let { fullName } = req.query
        try {
            const a = await User.create({
                fullName
            }, {
                validate: true
            })
            return res.json({ user: a })
        } catch (err) {
            return res.json({ error: err })
            console.log('error', err)
        }

        return res.json({ success: true })
    },

    async get(req, res) {
        try {
            let { id } = req.params
            if (id) {
                const user = await User.findByPk(id)

                return res.json({ data: user })
            } else {
                const users = await User.findAll()

                return res.json({ data: users })
            }
        } catch (error) {
            return res.json({ error }).status(BAD_REQUEST)
        }
    },
    async create(req, res) {
        let { body } = req
        try {
            return res.json({ data: await User.create(body, { validate: true }) })
        } catch (error) {
            return res.json({ error }).status(BAD_REQUEST)
        }
    },
    async update(req, res) {
        let { body } = req
        let { id } = req.params
        try {
            const [num] = await User.update(body, {
                where: { id },
                validate: true,
            })
            if (num > 0) {

                return res.json({ data: await User.findByPk(id) })
            }

            return res.json({ data: num })
        } catch (error) {
            return res.status(BAD_REQUEST).json({ error })
        }
    },
    async delete(req, res) {
        let { id } = req.params
        try {
            const num = await User.destroy({ where: { id } })
            if (num) {
                return res.status(204).json({ success: true })
            }

            return res.status(BAD_REQUEST).json({ error: true })
        } catch (error) {

        }
    }
}

export default UserController