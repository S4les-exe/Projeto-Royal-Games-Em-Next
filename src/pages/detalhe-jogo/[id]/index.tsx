import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "@/pages/detalhe-jogo/[id]/detalhe-jogo.module.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { listarPorId } from "../../api/jogoService";
import { formatarPreco } from "@/utils/formatacao";

interface Jogo{
    nome: string;
    descricao: string;
    preco: number;
    imagemUrl: string; 
    generos: string[];
    plataformas: string[];
    classificacao: string 
}


const DetalheJogo = () => {

    const[jogo, setJogo] = useState<Jogo>();

    const params = useParams();

    const id = params?.id;

    async function listarJogo(){
        try{
            const response = await listarPorId(Number(id));
            //console.log(response)
            setJogo(response)
            console.log(response)
        }catch(error : any){
            console.log(error.message)
        }
    }
    useEffect(() => {
        if(!id) return;

        setTimeout(() => {
            listarJogo();
        }, 1000); // one second
    }, [id]);


    return(
        <>
            <Header/>
                <section id={styles.detalhe_jogo}>
                        <div className={`${styles.container_detalhe} layout_guide`}>
                            {jogo ? ( <>
                            <div id={styles.cabecalho}>
                                <h1>Detalhes do Jogo</h1>
                                <hr />
                            </div>
                            <div id={styles.descricao}>
                                <img src={jogo.imagemUrl} alt="Imagem do jogo" />
                                <div id={styles.descricao_jogo}>
                                    <h2>{jogo.nome}</h2>
                                    <p>{jogo.descricao}</p>
                                </div>
                            </div>
                            <div id={styles.detalhes}>
                                <div id={styles.detalhes_esquerda}>
                                    <ul>
                                        <li><h3>Classificação indicativa:</h3>{jogo?.classificacao}</li>
                                        <li><h3>Preço:</h3> {formatarPreco(jogo.preco)}</li>
                                        
                                        <li>
                                            <ul><h3>Plataformas:</h3>
                                                {jogo.plataformas.map((plat) => (
                                                    <li key={plat}>{plat}</li>
                                                ))}
                                            </ul> 
                                        </li>
                                    </ul>
                                </div>
                                <div id={styles.detalhes_direita}>
                                    <ul>
                                            <li>    
                                                <ul><h3>Gêneros:</h3> 
                                                    {jogo.generos.map((gen) => (
                                                        <li key={gen}>{gen}</li>
                                                    ))}
                                                </ul>
                                            </li>
                                    </ul>
                                </div>
                            </div>
                            </>
                        ) : (<p>Carregando jogo...</p>)}
                        </div>
                </section>
            <Footer/>
        </>
    )
} 

export default DetalheJogo;