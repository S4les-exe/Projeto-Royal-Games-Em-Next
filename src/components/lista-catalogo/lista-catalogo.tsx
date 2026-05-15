import styles from "@/components/lista-catalogo/lista-catalogo.module.css"
import CardJogo from "../card-jogo/card-jogo";

const ListaCatalogo = () => {
    return(
        <main id={styles.main}>
            <div id={styles.area_filtros}>
                <input type="text" placeholder="Pesquise..."/>
                <select id={styles.btn_filtrar_preco}>Filtrar
                    <option value="">Filtrar</option>
                    <option value="">Maior Preço</option>
                    <option value="">Menor Preço</option>
                </select>
                <select id={styles.filtrar_categoria}>Categoria
                    <option value="">Ação</option>
                    <option value="">Fantasia</option>
                    <option value="">Sport</option>
                    <option value="">Aventura</option>
                </select>
            </div>
            <div id={styles.jogos}>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
                <CardJogo/>
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