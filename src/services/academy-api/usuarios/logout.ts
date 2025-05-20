import { onError } from "../../../utils/on-error";
import { academyApi } from "../client-http";
import type { ResponseAPI } from "../response-api";


export async function logoutAluno(token: string): Promise<ResponseAPI<undefined>> {
    try {
        const result = await academyApi.post("/logout", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
        return result.data
    } catch (error) {
        return onError(error);
    }
}