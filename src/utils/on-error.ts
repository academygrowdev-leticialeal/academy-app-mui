import { AxiosError } from "axios"
import type { ResponseAPI } from "../services/academy-api/response-api"

export function onError<Type>(error:unknown): ResponseAPI<Type> {
    // Erros de requisição - Respostas 400 - 500
    if (error instanceof AxiosError) {
        return {
            sucesso: false,
            mensagem: error.response?.data.mensagem
        }
    }

    // Erro do dev
    return {
        sucesso: false,
        mensagem: "Aconteceu um erro inesperado"
    }
}