import styles from "@/pages/home/home.module.css"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CardJogo from "@/components/card-jogo/card-jogo";
import ListaCatalogo from "@/components/lista-catalogo/lista-catalogo";

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
            <section id={styles.catalogo}>
                <div className={`${styles.container_catalogo} layout_guide`}>
                    <div id={styles.cabecalho}>
                       <h1>Catálogo de jogos</h1><hr />
                    </div>
                    <ListaCatalogo />
                </div>
            </section>

            {/* *****************************FOOTER********************************* */}
            <Footer />
        </>
    )
}

export default Home;
