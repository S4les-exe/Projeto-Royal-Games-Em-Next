import styles from "@/pages/home/home.module.css"
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Home = () => {
    return(
        <>
            <Header/>
            {/************************* BANNER *****************************/}
            <section id={styles.banner}> 
                <div id={styles.descricao}>
                    <h1>Conheça nosso jogos!</h1>
                    <p>Navegue por títulos de todas as gerações, descubra plataformas, gêneros e detalhes completos antes de escolher sua próxima aventura. Seu próximo jogo favorito começa aqui.</p>
                </div>
                <img src="../imgs/ImagemBanner.png" alt="Imagem Banner de uma mulher cibernetica do futuro" />
            </section>
            <Footer/>
        </>
    )
} 

export default Home;
