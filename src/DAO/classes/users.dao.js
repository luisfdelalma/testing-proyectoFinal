import userModel from "../models/user.model.js"

export default class Users {

    findByEmail = async (email) => {
        try {
            const result = await userModel.findOne({ email: email })
            return result
        } catch (error) {
            console.log("Error: " + error);
            return null
        }
    }

    create = async (user) => {
        try {
            const userf = await userModel.findOne({ email: user.email })
            if (userf) {
                return null
            } else {
                const result = await userModel.create({ ...user })
                return result
            }
        } catch (error) {
            console.log("Error: " + error);
            return null
        }
    }

    updatePass = async (user, newPass) => {
        try {
            const oldUser = await userModel.findOne({ email: user })
            if (oldUser) {
                const newUser = await userModel.updateOne({ email: user }, { password: newPass })
                return newUser
            } else {
                req.logger.error("El usuario no existe")
                return null
            }
        } catch (error) {
            req.logger.error(error)
            return null
        }
    }

    updateRole = async (id, role) => {
        try {
            const oldUser = await userModel.findById(id)
            if (oldUser) {
                const newUser = await userModel.findByIdAndUpdate(id, { role: role }, { new: true, lean: true })
                return newUser
            } else {
                req.logger.error("El usuario no existe")
                return null
            }
        } catch (error) {
            req.logger.error(error)
            return null
        }
    }

    getById = async (id) => {
        try {
            const result = await userModel.findById(id)
            return result
        } catch (error) {
            req.logger.error(error)
            return null
        }
    }

}