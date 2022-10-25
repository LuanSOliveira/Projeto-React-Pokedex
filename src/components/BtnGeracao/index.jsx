import { useDispatch } from "react-redux";
import { consultar } from "../../store/reducers/consultaApi";
import styles from "./BtnGeracao.module.css"

const BtnGeracao = ({nome, gen}) => {
    const dispatch = useDispatch();

    function Buscar(){
        dispatch(consultar(gen))
    }

    return(
        <button className={styles.btnGeracao} onClick={Buscar}>{nome}</button>
    )
}

export default BtnGeracao;