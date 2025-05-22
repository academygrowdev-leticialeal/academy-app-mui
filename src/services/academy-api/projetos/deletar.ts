import type { Project } from "../../../interfaces/project";
import { onError } from "../../../utils/on-error";
import { academyApi } from "../client-http";
import type { ResponseAPI } from "../response-api";

export interface DeletarProjetoDto {
    token: string;
    projetoId: string;
}

export async function deletarProjetoAPI(params: DeletarProjetoDto): Promise<ResponseAPI<Project>> {
    try {
        const result = await academyApi.delete(`/projetos/${params.projetoId}`, {
            headers: {
                Authorization: `Bearer ${params.token}`
            }
        })

        return result.data;
    } catch (error) {
       return onError(error);
    }
}