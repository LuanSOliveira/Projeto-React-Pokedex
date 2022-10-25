import styles from "./BoxImgPoke.module.css"

const BoxImgPoke = ({pokeId}) => {
    return(
        <div className={styles.boxImagemPokemon}>
            {(pokeId) && <img src={`https://www.serebii.net/art/th/${pokeId}.png`} alt="Imagem do Pokemon"/>}            
        </div>
    )
}

export default BoxImgPoke;