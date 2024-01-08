const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const knex = require("../database/knex");

class ImagesController {
    async create (request, response) {
        const { title, path } = request.body;
        const user_id  = request.user.id;

        await knex("images").insert({
            title,
            path,
            user_id
        })

        return response.status(201).json({
            status: "sucess",
            message: "imagem cadastrada com sucesso"
        })
    }

    async show (request, response) {
        const user_id = request.user.id;

        const images = await knex("images").where({ user_id });

        return response.json({
            images
        });
    }

    async delete (request, response) {
        const { password, id } = request.params;
        const user_id = request.user.id;

        const user = await knex("users").where({ id: user_id }).first();

        const passwordMatched = await compare(password, user.password);
        if ( !passwordMatched ) {
            throw new AppError("Senha Incorreta", 401);
        }

        await knex("images").where({ id }).delete();

        return response.json({
            status: "sucess",
            message: "imagem deletada com sucesso"
        })
    }
}

module.exports = ImagesController;