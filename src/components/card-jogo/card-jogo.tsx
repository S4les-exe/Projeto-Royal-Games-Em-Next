import styles from "@/components/card-jogo/card-jogo.module.css";
import { formatarPreco } from "@/utils/formatacao";

type Jogo = {
    jogoID: number,
    nome: string,
    preco: number,
    descricao: string,
    imagemUrl: string
}

const CardJogo = ({jogoID, nome, preco, descricao, imagemUrl}: Jogo) => {
    return(
        <article id={styles.card}>
            <img src={imagemUrl} alt="imagem ilustrativa da capa do jogo vendido" className={styles.imagem_jogo}/>
            <h2>{nome}</h2>
            <p id={styles.preco}>{formatarPreco(preco)}</p>
            <a href="/detalhe-jogo/">Detalhes</a>
        </article>
    )
} 

export default CardJogo;