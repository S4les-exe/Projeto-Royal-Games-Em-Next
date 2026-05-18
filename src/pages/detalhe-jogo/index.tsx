import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import styles from "@/pages/detalhe-jogo/detalhe-jogo.module.css";

const DetalheJogo = () => {
    return(
        <>
            <Header/>
                <section id={styles.detalhe_jogo}>
                    <div className={`${styles.container_detalhe} layout_guide`}>
                        <div id={styles.cabecalho}>
                            <h1>Detalhes do Jogo</h1>
                            <hr />
                        </div>
                        <div id={styles.descricao}>
                            <img src="../imgs/cod.png" alt="Imagem do jogo" />
                            <div id={styles.descricao_jogo}>
                                <h2>Call of Duty Warfire III</h2>
                                <p>Call of Duty volta com uma campanha inédita, uma versão modernizada dos mapas de multijogador clássicos e uma experiência JxA com zumbis em mundo aberto.

                                A campanha, continuação direta do fenômeno Call of Duty: Modern Warfare II, segue o embate do capitão Price e da Força Tarefa 141 contra o criminoso de guerra ultranacionalista Vladimir Makarov, que busca estender sua influência pelo mundo.</p>
                                
                                <p>
                                No multijogador, os 16 mapas que foram lançados com Modern Warfare 2 em 2009 voltam com gráficos atualizados, novos modos e recursos de jogo inovadores.

                                Em Modern Warfare Zombies, alie-se a outros esquadrões pela primeira vez e trabalhe em conjunto para sobreviver ao maior mapa do modo Zombies já visto.</p>
                            </div>
                        </div>
                        <div id={styles.detalhes}>
                            <div id={styles.detalhes_esquerda}>
                                <ul>
                                    <li><h3>Classificação indicativa:</h3> 18 anos</li>
                                    <li><h3>Preço:</h3> R$100,00</li>
                                    <li><h3>Plataformas:</h3> Playstation</li>
                                </ul>
                            </div>
                            <div id={styles.detalhes_direita}>
                                <ul>
                                    <li><h3>Categorias:</h3> Tiro</li>
                                    <li><h3>Gêneros:</h3> Ação</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer/>
        </>
    )
} 

export default DetalheJogo;