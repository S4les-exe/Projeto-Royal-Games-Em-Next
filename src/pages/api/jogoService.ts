import { api } from "./api";

//jogoFormulario = base para cadastro de jogo 
type JogoFormulario = {
    nome: string, 
    descricao: string,
    preco: number,
    imagem: File | null, 
    classificacaoIndicativaIds: number[]
    generoIds: number[]
    plataformaIds: number[]
}

interface JogoListagem{
    nome: string, 
    descricao: string, 
    preco: number,
    imagemUrl: string, 
    classificacaoIndicativaIds: number[]
    generoIds: number[]
    plataformaIds: number[]
    statusJogo: boolean
}

export async function cadastrarJogo(dados: JogoFormulario){
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco.toString());
        if(dados.imagem){
            formData.append("imagens", dados.imagem);
        }

        dados.generoIds.forEach((id) => {
            formData.append("generoIds", id.toString());
        })

        dados.plataformaIds.forEach((id) => {
            formData.append("plataformaIds", id.toString());
        })

        dados.classificacaoIndicativaIds.forEach((id) => {
            formData.append("classificacaoIndicativaIds", id.toString())
        })

        await api.post("Jogo", formData);
    }catch(error:any){
        throw new Error(error.response.data);
    }
}

export async function listarJogo(){
    try{
        const response = await api.get("Jogo");

        //vai filtrar somnete produtos ativos 
        const jogosAtivos = response.data.filter(
            (jogo: JogoListagem) => jogo.statusJogo === true
        );

        //adiciona a url completa da imagem
        const jogos = jogosAtivos.map((jogo : JogoListagem) => ({
            ...jogo,
            imagemUrl: `${api.defaults.baseURL}${jogo.imagemUrl}`
        }));

        return response.data;
    }catch(error:any){
        throw new Error(error.response.data);
    }
}

export async function listarPorId(id: number){
    try{
        const response = await api.get("Jogo/" + id);

        const jogos = {
            ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };

        console.log(`Teste ${jogos}`)
        return jogos;
    }catch(error: any){
        throw new Error(error.response.data)
    }
}

export async function excluirJogo(jogoId : number){
    try{
        const response = await api.delete("Jogo/" + jogoId)

        console.log(response);
    }catch(error:any){
        throw new Error(error.response.data)
    }
}

export async function editarJogo(jogoId: number, dados: JogoFormulario){
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome); //anexar
        formData.append("descricao", dados.descricao);
        formData.append("preco", dados.preco.toString());
        if(dados.imagem){
            formData.append("imagem", dados.imagem);
        }
    
        dados.generoIds.forEach((id) => {
            formData.append("generoIds", id.toString());
        })
        dados.plataformaIds.forEach((id) => {
            formData.append("plataformaIds", id.toString());
        })

        await api.put("Jogo/" + jogoId, formData);

    }catch(error:any){
        throw new Error(error.response.data);
    }
}