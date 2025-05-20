export interface ResponseAPI<Type> {
    sucesso: boolean;
    mensagem: string;
    dados?: Type;
}