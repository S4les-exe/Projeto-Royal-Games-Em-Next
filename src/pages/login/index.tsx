import styles from "@/pages/login/login.module.css"
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { login } from "../api/authService";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    const router = useRouter();
    const notificacao = (msg:string) => toast(msg);
    const erro = (msg: string) => toast.error(msg);

    async function autenticar(e: React.FormEvent <HTMLFormElement>){
        e.preventDefault();
        try{
            await login(email,senha);
            notificacao("Login bem sucedido!")

            setTimeout(() => {
                router.push("/home");
            }, 2000); //2 segundos
        }catch(error: any){
            erro(error.message);
        }
    }

    return(
        <>
            <ToastContainer/>
            <main id={styles.main}>
                <div id={styles.imagem_login}>
                    <img src="../imgs/mulherLogin.png" alt="Mulher muito sexy de login" />
                </div>
                <div id={styles.campo_login}>
                    <a href="/home"><img src="../imgs/footerLogo.png" alt="logo royal games" /></a>
                    <form onSubmit={autenticar} id={styles.formulario}>
                        <div id={styles.campos}>
                            <div className={styles.campo}>
                                <label htmlFor="email">Email</label>
                                <input type="text" name="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                        
                            <div className={styles.campo}>
                                <label htmlFor="senha">Senha</label>
                                <input type="password" placeholder="*********" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                            </div>
                        </div>
                        <button>Entrar</button>
                    </form>
                </div>
            </main>
        </>
    )
} 

export default Login;