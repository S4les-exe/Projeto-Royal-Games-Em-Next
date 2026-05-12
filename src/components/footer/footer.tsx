import styles from "@/components/footer/footer.module.css";

const Footer = () => {
    return(
        <footer id={styles.footer}>
            <div className={`${styles.container} layout_guide`}>
                <img src="../imgs/LogoHeader.png" alt="Logo Royal Games" />
                <div id={styles.informacoes}>
                    <p>royalgames@email.com</p>
                    <p>(11)99999-9999</p>
                    <p>@RoyalGames</p>
                </div>
            </div>
        </footer>
    )
} 

export default Footer;