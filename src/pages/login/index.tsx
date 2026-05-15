import styles from "@/pages/login/login.module.css"

const Login = () => {
    return(
        <>
            <main id={styles.main}>
                <div id={styles.imagem_login}>
                    <img src="../imgs/mulherLogin.png" alt="Mulher muito sexy de login" />
                </div>
                <div id={styles.campo_login}>
                    <img src="../imgs/footerLogo.png" alt="logo royal games" />
                    <form action="" id={styles.formulario}>
                        <div id={styles.campos}>
                            <div className={styles.campo}>
                                <label htmlFor="">Email</label>
                                <input type="text" />
                            </div>
                        
                            <div className={styles.campo}>
                                <label htmlFor="">Senha</label>
                                <input type="text"/>
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