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
        const { id } = request.params;

        await knex("images").where({ id }).delete();

        return response.json({
            status: "sucess",
            message: "imagem deletada com sucesso"
        })
    }
}

module.exports = ImagesController;