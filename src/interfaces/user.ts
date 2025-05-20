export interface User {
    id: string;            
    nome: string;         
    email: string;      
    idade?: number;       
    senha: string;      
    authToken?: string;     
    criadoEm: string;     
    atualizado_em: string;
}