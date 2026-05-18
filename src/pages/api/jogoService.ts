import { api } from "./api";

//jogoFormulario = base para cadastro de jogo 
type jogoFormulario = {
    nome: string, 
    descricao: string,
    preco: string,
    imagem: File | null, 
    
}