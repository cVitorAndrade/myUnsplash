const knex = require("../database/knex");

class ImagesController {
    async create (request, response) {
        const { title, path } = request.body;
        const user_id  = request.user.id

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
}

module.exports = ImagesController;