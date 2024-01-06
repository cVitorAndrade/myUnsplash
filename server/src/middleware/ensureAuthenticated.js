const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const configs = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization;
    if ( !authHeader ) {
        throw new AppError("Tokén não informado.");
    }

    try {
        const [, token] = authHeader.split(" ");
        const { sub: user_id } = verify(token, configs.jwt.secret);

        request.user = {
            id: Number(user_id)
        };
        
        return next();

    } catch (error) {
        throw new AppError("Tokén inválido");
    }
}

module.exports = ensureAuthenticated;