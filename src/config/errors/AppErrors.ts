import { request, response } from "express";

/**
 * Errors
 * Padronizacao de erros para  a aplicação
 */

class AppErrors {

    public readonly message: string;

    public readonly statusCode: number;

    constructor(message: string, statusCode = 400){

        this.message = message;
        this.statusCode = statusCode;

    }

}

export { AppErrors }