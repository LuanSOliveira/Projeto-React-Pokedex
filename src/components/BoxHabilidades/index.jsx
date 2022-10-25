import styles from "./BoxHabilidades.module.css"

const BoxHabilidades = ({pokeId, pokeStats}) => {
    return(
        <div className={styles.boxHabilidades}>
            {(pokeId) && 
                <>
                    <p>HP: {pokeStats[0].base_stat}</p>
                    <p>ATAQUE: {pokeStats[1].base_stat}</p>
                    <p>SP. ATAQUE: {pokeStats[3].base_stat}</p>
                    <p>DEFESA: {pokeStats[2].base_stat}</p>
                    <p>SP. DEFASA: {pokeStats[4].base_stat}</p>
                    <p>VELOCIDADE: {pokeStats[5].base_stat}</p>
                </>
            }
        </div>
    )
}

export default BoxHabilidades;