import type { UserLogged } from "../../../interfaces/user-logged";
import { onError } from "../../../utils/on-error"
import { academyApi } from "../client-http";
import type { ResponseAPI } from "../response-api";

export async function loginAluno(dados: Omit<UserLogged, 'token'>): Promise<ResponseAPI<{ token: string; }>> {
    try {
        const result = await academyApi.post("/login", dados);

        return result.data
    } catch (error) {
        return onError(error);
    }
}