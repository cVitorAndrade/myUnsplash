const AppError = require("../utils/AppError");
const { hash } = require("bcryptjs");
const knex = require("../database/knex");

class UsersController {
    async create (request, response) {
        const { name, email, password } = request.body;

        const user = await knex("users").where({ email }).first();
        if ( user ) {
            throw new AppError("Esse email já está em uso.")
        }

        const hashedPassword = await hash(password, 8);
        await knex("users").insert({
            name,
            email,
            password: hashedPassword
        });

        return response.status(201).json({
            status: "sucess",
            message: "usuário criado com sucesso"
        })
        
    }
}

module.exports = UsersController;