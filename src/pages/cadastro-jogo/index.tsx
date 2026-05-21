import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ListaCatalogo from "@/components/lista-catalogo/lista-catalogo";
import styles from "@/pages/cadastro-jogo/cadastro-jogo.module.css"
import { useRouter } from "next/router";
import { useState } from "react";
import { cadastrarJogo, editarJogo, listarPorId } from "../api/jogoService";
import { notificacao } from "@/utils/toast";

interface Genero{
    generoID: number[],
    nome: string
}

interface Plataforma{
    plataformasIds: number[],
    nome: string
}

interface ClassificacaoIndicativa{
    classificacaoIndicativaID: number,
    classificacao: string
}

const CadastroJogo = () => {

    const[genero, setGenero] = useState<Genero[]>([]);
    const[plataforma, setPlataforma] = useState<Plataforma[]>([]);
    const[classificacaoIndicativa, setClassificacaoIndicativa] = useState<ClassificacaoIndicativa[]>([]);

    const[nome, setNome] = useState<string>("");
    const[descricao, setDescricao] = useState<string>("");
    const[preco, setPreco] = useState<string>("");
    const[imagem, setImagem] = useState<File | null>(null);

    const[generosSelecionados, setGenerosSelecionados] = useState<number[]>([]);
    const[plataformasSelecionadas, setPlataformaSelecionadas] = useState<number[]>([]);
    const[classificacaoSelecionada, setClassificacaoSelecionada] = useState<number>(0);

    const[estaAutenticado, setEstaAutenticado] = useState(false); 

    const router = useRouter();
    const id = router.query.id; 
    //console.log(id);
    let telaEditar = false;

    if(id){
        telaEditar = true
    }
    console.log(telaEditar);

    async function carregarInformacoes(){
      if(!id) return;

      const jogo = await listarPorId(Number(id))
      setNome(jogo.nome);
      setDescricao(jogo.descricao);
      setPreco(jogo.preco);
      setGenerosSelecionados(jogo.generoIds);
      setPlataformaSelecionadas(jogo.plataformasIds);
      setClassificacaoIndicativa(jogo.classificacaoIndicativaID);
    }

    async function salvarJogo(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        try{
            const dados = {
                nome,
                descricao,
                imagem,
                preco,
                generoIds: generosSelecionados,
                plataformasIds: plataformasSelecionadas,
                classificacaoIndicativaID: classificacaoSelecionada,
            }

            //await cadastrarProduto(dados);
            
            if(telaEditar){
              await editarJogo(Number(id), dados)
              notificacao("Jogo editado!");
            }
            else{
              await cadastrarJogo(dados);
              notificacao("Jogo cadastrado!");
            }
            console.log(dados)
        }catch(error:any){
            throw new Error(error.message);
        }
    }

    if(!estaAutenticado){
        return null;
    }

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