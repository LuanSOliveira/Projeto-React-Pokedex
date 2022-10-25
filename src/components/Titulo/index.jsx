import BtnGeracao from "../BtnGeracao"
import styles from "./Navbar.module.css"

const Titulo = () => {
    return(
        <div className={styles.navbar}>
            <h1>Poke<img src="src/assets/img/react.svg" alt="logo-react"/>Dex</h1>
            <div className={styles.geracoes}>
                <BtnGeracao nome="001 ~ 151" gen={1}/>
                <BtnGeracao nome="152 ~ 251" gen={2}/>
                <BtnGeracao nome="252 ~ 386" gen={3}/>
                <BtnGeracao nome="387 ~ 493" gen={4}/>
                <BtnGeracao nome="494 ~ 649" gen={5}/>
                <BtnGeracao nome="650 ~ 721" gen={6}/>
            </div>
        </div>
    )
}

export default Titulo