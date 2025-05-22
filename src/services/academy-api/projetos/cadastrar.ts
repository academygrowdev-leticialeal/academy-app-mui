import type { Project } from "../../../interfaces/project";
import { onError } from "../../../utils/on-error";
import { academyApi } from "../client-http";
import type { ResponseAPI } from "../response-api";

export interface CadastrarProjetoDto {
    token: string;
    titulo: string;
    descricao: string;
    ferramenta: string;
    status: "finalizado" | "em_andamento";
}

export async function cadastrarProjetoAPI({ token, ...dados}: CadastrarProjetoDto): Promise<ResponseAPI<Project>> {
    try {
        const result = await academyApi.post(`/projetos`, dados, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result.data;
    } catch (error) {
       return onError(error);
    }
}