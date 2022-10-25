import BtnPoke from "../BtnPoke";
import styles from "./ListaPoke.module.css"
import {v4 as uuid} from "uuid"

import { useSelector } from "react-redux";

const ListaPoke = () => {
    const listaDePokemons = useSelector((state) => state.consultaApi)
    return(
        <div className={styles.listaPoke}>
            {(listaDePokemons.length !== 0) && listaDePokemons.map((poke) => <BtnPoke key={`${uuid}${poke[0].name}`} nome={`${poke[0].name}`} id={`${poke[0].id}`} pokemon={poke[0]}/>)}
        </div>
    )
}

export default ListaPoke;