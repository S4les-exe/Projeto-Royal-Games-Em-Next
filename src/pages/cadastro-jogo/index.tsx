import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ListaCatalogo from "@/components/lista-catalogo/lista-catalogo";
import styles from "@/pages/cadastro-jogo/cadastro-jogo.module.css"

const CadastroJogo = () => {
    return(
        <>
            <Header/>
            {/* ****************************CADASTRO DE PRODUTOS************************************** */}
                <section id={styles.cadastro_jogo}>
                    <div className={`${styles.container_cadastro} layout_guide`}>
                        <div id={styles.cabecalho_cadastro}>
                            <h1>Cadastrar novo jogo</h1>
                            <hr />
                        </div>

                        <form action="" id={styles.form_cadastro}>
                            <div id={styles.area_cadastro_dados}>
                                <div id={styles.parte_esquerda}>
                                    <div className={styles.campo}>
                                        <label htmlFor="">Nome</label>
                                        <input type="text" />
                                    </div>

                                    <div className={styles.meio}>
                                        <div className={styles.campo}>
                                            <label htmlFor="">Valor</label>
                                            <input type="number" />
                                        </div>
                                    
                                        <div className={styles.campo}>
                                            <label htmlFor="">Gênero</label>
                                            <select name="genero" id="">
                                                <option value="">Ação</option>
                                                <option value="">Aventura</option>
                                                <option value="">Tiro</option>
                                            </select>
                                        </div>

                                        <div className={styles.campo}>
                                            <label htmlFor="">Classificação Indicativa</label>
                                            <select name="" id="">
                                                <option value="">18</option>
                                                <option value="">16</option>
                                                <option value="">12</option>
                                                <option value="">Livre</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.baixo}>
                                        <div className={styles.campo}>
                                            <label htmlFor="">Plataforma</label>
                                            <select name="" id="">
                                                <option value="">Playstation</option>
                                                <option value="">Xbox</option>
                                                <option value="">PC</option>
                                            </select>
                                        </div>

                                        <div className={styles.campo}>
                                            <label htmlFor="">Imagem</label>
                                            <input type="file" src="" alt=""/>
                                        </div>
                                    </div>
                                </div>

                                <div id={styles.parte_direita}>
                                    <div className={styles.campo}>
                                        <label htmlFor="">Descrição</label>
                                        <textarea name="" id=""></textarea>
                                    </div>
                                </div>
                            </div>
                            <button>Cadastrar</button>
                        </form>
                    </div>
                </section>

                {/* ************************LISTAR DE JOGOS******************************** */}
                <section id={styles.lista_jogos}>
                    <div className={`${styles.container_lista} layout_guide`}>
                        <div id={styles.cabecalho_lista}>
                            <h2>Lista de Jogos</h2>
                            <hr />
                        </div>
                        
                        <ListaCatalogo />
                    </div>
                </section>
            <Footer/>
        </>
    )
} 

export default CadastroJogo;