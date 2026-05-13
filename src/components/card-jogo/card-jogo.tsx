import styles from "@/components/card-jogo/card-jogo.module.css";

const CardJogo = () => {
    return(
        <article id={styles.card}>
            <img src="../imgs/cod.png" alt="imagem ilustrativa da capa do jogo vendido" />
            <h2>Call of Duty</h2>
            <p id={styles.preco}>R$70,00</p>
            <a href="">Detalhes</a>
        </article>
    )
} 

export default CardJogo;