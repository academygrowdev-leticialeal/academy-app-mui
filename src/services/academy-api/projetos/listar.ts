import type { Project } from "../../../interfaces/project";
import { onError } from "../../../utils/on-error";
import { academyApi } from "../client-http";
import type { ResponseAPI } from "../response-api";

export async function listarProjetosAPI(token: string): Promise<ResponseAPI<Project[]>> {
    try {
        const result = await academyApi.get("/projetos", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return result.data;
    } catch (error) {
       return onError(error);
    }
}