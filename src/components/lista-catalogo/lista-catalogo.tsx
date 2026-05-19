import styles from "@/components/lista-catalogo/lista-catalogo.module.css"
import CardJogo from "../card-jogo/card-jogo";
import { listarJogo } from "@/pages/api/jogoService";
import { useEffect, useState } from "react";

interface Jogo{
    jogoID: number,
    nome: string,
    preco: number, 
    imagemUrl: string,
    descricao: string,
    statusJogo: boolean
}


const ListaCatalogo = () => {

    const[jogos, setJogos] = useState<Jogo[]>([]);
    //salvar as informacoes de filtro 
    const[ordem, setOrdem] = useState("todos");
    //salva oque for escrito pelo usuario 
    const[pesquisa, setPesquisa] = useState("");

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
                <select id={styles.filtrar_categoria}>Categoria
                    <option value="">Ação</option>
                    <option value="">Fantasia</option>
                    <option value="">Sport</option>
                    <option value="">Aventura</option>
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
                    <p id={styles.carregando}>Carregando produto...</p>
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