import styles from "@/pages/home/home.module.css"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CardJogo from "@/components/card-jogo/card-jogo";
import ListaCatalogo from "@/components/lista-catalogo/lista-catalogo";

interface Jogo{
    titulo: string,
    descricao: string, 
    imagemUrl: string,
    preco: number,
    produtoID: number,
    // 
}

const Home = () => {
    return (
        <>
            <Header />
            {/************************* BANNER *****************************/}
            <section id={styles.banner}>
                <div className={`${styles.container_banner} layout_guide`}>
                    <div id={styles.descricao}>
                        <h1>Conheça nossos jogos!</h1>
                        <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                    </div>
                    <img src="../imgs/ImagemBanner.png" alt="Imagem Banner de uma mulher cibernetica do futuro" />
                </div>

            </section>

            {/* **************************CATALOGO***************************** */}
            <section className={styles.catalogo} id="catalago">
                <div className={`${styles.container_catalogo} layout_guide`}>
                    <div id={styles.cabecalho}>
                       <h1>Catálogo de jogos</h1><hr />
                    </div>
                    <CardJogo/>
                </div>
            </section>

            {/* *****************************PARTE DO MEME********************** */}
            <section id={styles.informacao_jogos}>
                <div className={`${styles.container_informacao} layout_guide`}>
                    <div id={styles.cabecalho_informacao}>
                        <h1>Jogos online podem afetar o comportamento humano?</h1>
                        <hr />
                    </div>

                    <div id={styles.area_imagens}>
                        <img src="../imgs/lol_informacao.png" alt="logo da jogo league of legends" />
                        <img src="../imgs/csgo.png" alt="logo do jogo counter strike" />
                    </div>
                    <p> Estudos indicam que jogos podem alterar o comportamento humano… Principalmente quando o time resolve testar sua paciência em plena partida ranqueada.</p>
                </div>
            </section>

            {/* *****************************FOOTER********************************* */}
            <Footer />
        </>
    )
}

export default Home;
