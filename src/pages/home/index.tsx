import styles from "@/pages/home/home.module.css"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CardJogo from "@/components/card-jogo/card-jogo";

const Home = () => {
    return(
        <>
            <Header/>
            {/************************* BANNER *****************************/}
            <section id={styles.banner}> 
                <div id={styles.descricao}>
                    <h1>Conheça nossos jogos!</h1>
                    <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                </div>
                <img src="../imgs/ImagemBanner.png" alt="Imagem Banner de uma mulher cibernetica do futuro" />
            </section>

            {/* **************************CATALOGO***************************** */}
            <section id={styles.catalogo}>
                <div id={styles.cabecalho}>
                    <h1>Catálogo de jogos</h1><hr />
                </div>
                <CardJogo/>
            </section>
            <Footer/>
        </>
    )
} 

export default Home;
