import styles from "./Dex.module.css"

import BoxImgPoke from "../BoxImgPoke"
import BoxNome from "../BoxNome";
import BoxHabilidades from "../BoxHabilidades";
import { useSelector } from "react-redux";

const Dex = () => {
    const pokemon = useSelector((state) => state.pokeSelecionado)

    return(
        <div className={styles.pokedex}>
            <div className={styles.imgsPoke}>
                <BoxImgPoke pokeId={pokemon.id}/>
            </div>
            <div className={styles.infoPoke}>
                <BoxNome pokeId={pokemon.id} pokeNome={pokemon.name} pokeTipos={pokemon.types}/>
                <BoxHabilidades pokeId={pokemon.id} pokeStats={pokemon.stats}/>
            </div>
        </div>
    )
}

export default Dex;