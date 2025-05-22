export interface Project {
    id: string;
    titulo: string;
    descricao: string | null;
    ferramenta: string;
    status: "finalizado" | "em_andamento";
}