import styles from "@/components/header/header.module.css"

const Header = () => {
    return(
        <header id={styles.header}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/LogoHeader.png" alt="Logo Royal Games" />
                <div id={styles.div_botoes}>
                    <a href="" id={styles.catalogo}>Catalogo</a>
                    <button id={styles.btn_login}><a href="login">Login</a></button>
                </div>
            </div>
        </header>
    )
} 

export default Header;