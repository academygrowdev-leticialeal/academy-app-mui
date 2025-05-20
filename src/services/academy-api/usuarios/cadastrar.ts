import type { User } from "../../../interfaces/user";
import { academyApi } from "../client-http";
import type { ResponseAPI } from "../response-api";
import { onError } from "../../../utils/on-error";

interface CadastrarAlunoDto {
    nome: string;
    email: string;
    senha: string;
    idade?: number;
}

export async function cadastrarAluno(dados: CadastrarAlunoDto): Promise<ResponseAPI<User>> {
    try {
        const result = await academyApi.post("/alunos", dados)

        return result.data
    } catch (error) {
        return onError(error);
    }
}