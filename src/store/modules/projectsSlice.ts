import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Project } from "../../interfaces/project";
import { listarProjetosAPI } from "../../services/academy-api/projetos/listar";
import type { RootState } from "../typed-hooks";
import { cadastrarProjetoAPI, type CadastrarProjetoDto } from "../../services/academy-api/projetos/cadastrar";
import { atualizarProjetoAPI, type AtualizarProjetoDto } from "../../services/academy-api/projetos/atualizar";
import { buscarProjetoPorIdAPI, type BuscarProjetoPorIdDto } from "../../services/academy-api/projetos/buscar-por-id";
import { deletarProjetoAPI, type DeletarProjetoDto } from "../../services/academy-api/projetos/deletar";
import { resetFormValues, setFormValues, setIsOpen } from "./modalSlice";
import { setNotification } from "./notificationSlice";

interface ProjectSlice {
   isLoading: boolean; 
   projects: Project[];
}

const initialState: ProjectSlice = {
    isLoading: false,
    projects: []
}

// Listagem de projetos na API
export const listarProjetos = createAsyncThunk('projects/listarProjetos', async (token: string) => {
    const resultado = await listarProjetosAPI(token);

    return resultado
});

// Buscar projeto por ID
export const buscarProjetoPorID = createAsyncThunk('projects/buscarProjetoPorID', async (dados: BuscarProjetoPorIdDto, { dispatch }) => {
    const resultado = await buscarProjetoPorIdAPI(dados);

    if (resultado.dados) {
        dispatch(setFormValues({ 
            id: resultado.dados.id,
            title: resultado.dados.titulo,
            description: resultado.dados.descricao ?? "",
            status: resultado.dados.status,
            tools: resultado.dados.ferramenta.split(",")
        }))
    }

    return resultado
});

// Cadastro de projetos na API
export const cadastrarProjeto = createAsyncThunk('projects/cadastrarProjeto', async (dados: CadastrarProjetoDto, { dispatch }) => {
    const resultado = await cadastrarProjetoAPI(dados);

    if (resultado.sucesso) {
        dispatch(resetFormValues())
        dispatch(setIsOpen({ isOpen: false, title: "" }))
    }

    dispatch(setNotification({ isVisible: true, message: resultado.mensagem, severity: resultado.sucesso ? "success" : "error" }))

    return resultado
});

// Atualizar de projetos na API
export const atualizarProjeto = createAsyncThunk('projects/atualizarProjeto', async (dados: AtualizarProjetoDto) => {
    const resultado = await atualizarProjetoAPI(dados);

    return resultado
});

// Excluir de projetos na API
export const deletarProjeto = createAsyncThunk('projects/deletarProjeto', async (dados: DeletarProjetoDto) => {
    const resultado = await deletarProjetoAPI(dados);

    return resultado
});

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listarProjetos.pending, (currentState) => {
            currentState.isLoading = true;
        });
        builder.addCase(buscarProjetoPorID.pending, (currentState) => {
            currentState.isLoading = true;
        });
        builder.addCase(cadastrarProjeto.pending, (currentState) => {
            currentState.isLoading = true;
        });
        builder.addCase(atualizarProjeto.pending, (currentState) => {
            currentState.isLoading = true;
        });
        builder.addCase(deletarProjeto.pending, (currentState) => {
            currentState.isLoading = true;
        });



        builder.addCase(listarProjetos.fulfilled, (currentState, action) => {
            currentState.isLoading = false;
            
            if(action.payload.sucesso && action.payload.dados) {
                currentState.projects = action.payload.dados
            }
        });

        builder.addCase(buscarProjetoPorID.fulfilled, (currentState) => {
            currentState.isLoading = false;
        });

        builder.addCase(cadastrarProjeto.fulfilled, (currentState, action) => {
            currentState.isLoading = false;

            if(action.payload.sucesso && action.payload.dados) {
                currentState.projects.push(action.payload.dados)
            }
        });

        builder.addCase(atualizarProjeto.fulfilled, (currentState, action) => {
            currentState.isLoading = false;

            if(action.payload.sucesso && action.payload.dados) {
                const index = currentState.projects.findIndex((p) => p.id === action.payload.dados!.id);
                currentState.projects[index] = action.payload.dados;
            }
        });

        builder.addCase(deletarProjeto.fulfilled, (currentState, action) => {
            currentState.isLoading = false;

            if(action.payload.sucesso && action.payload.dados) {
                const index = currentState.projects.findIndex((p) => p.id === action.payload.dados!.id);
                currentState.projects.splice(index, 1);
            }
        });
        

    }
});

export const projectsReducer = projectsSlice.reducer;
export const selectProjects = (store: RootState) => store.projects;


