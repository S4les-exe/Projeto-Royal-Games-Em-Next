import styles from "@/components/header/header.module.css"

const Header = () => {
    return(
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <a href="/home"><img src="../imgs/LogoHeader.png" alt="Logo Royal Games" /></a>
                <div id={styles.div_botoes}>
                    <a href="#catalago" id={styles.catalogo}>Catalogo</a>
                    <button id={styles.btn_login}><a href="login">Login</a></button>
                </div>
            </div>
        </header>
    )
} 

export default Header;