import styles from "@/components/header/header.module.css"

const Header = () => {
    return(
        <header>
            <img src="../imgs/LogoHeader.png" alt="Logo Royal Games" />
            <div id={styles.div_botoes}>
                <a href="">Catalogo</a>
                <button>Login</button>
            </div>
        </header>
    )
} 

export default Header;