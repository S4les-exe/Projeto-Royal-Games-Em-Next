import styles from "@/components/lista-catalogo/lista-catalogo.module.css"
import CardJogo from "../card-jogo/card-jogo";
import { listarJogo } from "@/pages/api/jogoService";
import { useEffect, useState } from "react";
import { listarGenero } from "@/pages/api/generoService";

interface Jogo{
    jogoID: number,
    nome: string,
    preco: number, 
    imagemUrl: string,
    descricao: string,
    statusJogo: boolean,
    generoIds: number,
}

interface Genero{
    generoID: number;
    nome: string,
}

const ListaCatalogo = () => {

    const[jogos, setJogos] = useState<Jogo[]>([]);
    //salvar as informacoes de filtro 
    const[ordem, setOrdem] = useState("todos");
    //salva oque for escrito pelo usuario 
    const[ordemGenero, setOrdemGenero] = useState("todos")
    const[pesquisa, setPesquisa] = useState("");
    //filtro de genero
    const[generos, setGeneros] = useState<Genero[]>([]);
    const[generosSelecionados, setGenerosSelecionados] = useState<number[]>([]);

    async function listar(){
        try{
            const lista =  await listarJogo();
            setJogos(lista);
            console.log(lista);
        }catch(error : any){
            console.log(error.message)
        }
    }

    useEffect(() => {
        listar();
        listarGen();
    }, []) 

    const jogosFiltrados = jogos.filter((jogo) => jogo.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    .sort((a, b) => {
        if(ordem === "menor_valor"){
            return a.preco - b.preco
        }else if(ordem === "maior_valor"){
            return b.preco - a.preco
        }

        return a.jogoID - b.jogoID;
    });

    // const generoFiltrados = generos.filter((item) => item.nome == )

    async function listarGen(){
        const lista = await listarGenero()

        setGeneros(lista.data);
        console.log(lista.data);
    }

    return(
        <main id={styles.main}>
            <div id={styles.area_filtros}>
                <input type="text" placeholder="Pesquise..."
                name="pesquisa"
                id=""
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}/>
                <select id={styles.btn_filtrar_preco} value={ordem} onChange={(e) => setOrdem(e.target.value)}>Filtrar
                    <option value="todos">Filtrar</option>
                    <option value="maior_valor">Maior Preço</option>
                    <option value="menor_valor">Menor Preço</option>
                </select>
                <select id={styles.filtrar_categoria} size={1} value={ordemGenero}
                >
                    {generos.map((item) => (
                        <option value={item.generoID} key={item.generoID}>{item.nome}</option>
                    )
                    )}
                </select>
            </div>
            <div id={styles.jogos}>
                {jogosFiltrados.length > 0 ? jogosFiltrados.map((item) => (
                    <CardJogo
                        key={item.jogoID}
                        jogoID={item.jogoID}
                        nome={item.nome}
                        descricao={item.descricao}
                        preco={item.preco}
                        imagemUrl={item.imagemUrl}
                    />
                )) : (
                    <p id={styles.carregando}>Carregando jogos...</p>
                )}
                
            </div>
            <ul id={styles.navegacao}>
                <li id={styles.seta}><img src="../imgs/seta-esquerda.png" alt="seta para a esquerda" /></li>
                <li id={styles.numeros}>1</li>
                <li id={styles.numeros}>2</li>
                <li id={styles.numeros}>3</li>
                <li id={styles.numeros}>4</li>
                <li id={styles.numeros}>5</li>
                <li id={styles.seta}><img src="../imgs/seta-direita.png" alt="seta para a direita" /></li>
            </ul>
        </main>
    )
} 

export default ListaCatalogo;