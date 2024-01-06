const { compare } = require("bcryptjs");
const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { sign } = require("jsonwebtoken");
const configs = require("../configs/auth");

class SessionsController {
    async create (request, response) {
        const { email, password } = request.body;

        const user = await knex("users").where({ email }).first();
        if ( !user ) {
            throw new AppError("Email ou senha inválido.");
        }

        const passwordMatched = await compare(password, user.password);
        if ( !passwordMatched ) {
            throw new AppError("Email ou senha inválido.");
        }

        const { expiresIn, secret } = configs.jwt;

        const token = sign({}, secret, {
            expiresIn,
            subject: String(user.id)
        })

        return response.json({
            user,
            token
        })
    }
}

module.exports = SessionsController;