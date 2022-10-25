import { useDispatch } from "react-redux"
import { selecionar } from "../../store/reducers/pokeSelecionado"
import styles from "./BtnPoke.module.css"

const BtnPoke = ({nome, id, pokemon}) => {
    const dispatch = useDispatch()

    function BuscaIcone(numero) {
        if(numero < 10){
            return <img src={`https://www.serebii.net/pokedex-swsh/icon/00${numero}.png`} alt="icone pokemon"/>
        }
        else if(numero < 100){
            return <img src={`https://www.serebii.net/pokedex-swsh/icon/0${numero}.png`} alt="icone pokemon"/>
        }
        else if(numero >= 100){
            return <img src={`https://www.serebii.net/pokedex-swsh/icon/${numero}.png`} alt="icone pokemon"/>
        }
    }

    function SelecionaPokemon(){
        dispatch(selecionar(pokemon))
    }

    return(
        <button className={styles.btnPoke} onClick={SelecionaPokemon}>{BuscaIcone(id)} {nome}</button>
    )
}

export default BtnPoke;