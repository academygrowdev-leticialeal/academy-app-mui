import type { Project } from "../../../interfaces/project";
import { onError } from "../../../utils/on-error";
import { academyApi } from "../client-http";
import type { ResponseAPI } from "../response-api";

export interface AtualizarProjetoDto {
    token: string;
    projetoId: string;
    titulo: string;
    descricao: string;
    ferramenta: string;
    status: "finalizado" | "em_andamento";
}

export async function atualizarProjetoAPI({ token, projetoId, ...dados}: AtualizarProjetoDto): Promise<ResponseAPI<Project>> {
    try {
        const result = await academyApi.put(`/projetos/${projetoId}`, dados, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result.data;
    } catch (error) {
       return onError(error);
    }
}