import styles from "./BoxNome.module.css"

const BoxNome = ({pokeId, pokeNome, pokeTipos}) => {

    function Traduzir(tipo){
        if(tipo === 'bug'){
            return 'Inseto'
        }
        else if(tipo === 'dark'){
            return 'Noturno'
        }
        else if(tipo === 'dragon'){
            return 'Dragão'
        }
        else if(tipo === 'electric'){
            return 'Eletrico'
        }
        else if(tipo === 'fairy'){
            return 'Fada'
        }
        else if(tipo === 'fighting'){
            return 'Lutador'
        }
        else if(tipo === 'fire'){
            return 'Fogo'
        }
        else if(tipo === 'flying'){
            return 'Voador'
        }
        else if(tipo === 'ghost'){
            return 'Fantasma'
        }
        else if(tipo === 'grass'){
            return 'Grama'
        }
        else if(tipo === 'ground'){
            return 'Terra'
        }
        else if(tipo === 'ice'){
            return 'Gelo'
        }
        else if(tipo === 'normal'){
            return 'Normal'
        }
        else if(tipo === 'poison'){
            return 'Venenoso'
        }
        else if(tipo === 'psychic'){
            return 'Psíquico'
        }
        else if(tipo === 'rock'){
            return 'Rocha'
        }
        else if(tipo === 'steel'){
            return 'Metal'
        }
        else if(tipo === 'water'){
            return 'Água'
        }
    }

    return(
        <div className={styles.boxNome}>
            {(pokeId) && 
                <>
                    <h2>{pokeNome[0].toUpperCase() + pokeNome.substring(1)}</h2>
                    <div className={styles.boxTipos}>
                        <p>{Traduzir(pokeTipos[0].type.name)}</p>
                        {(pokeTipos.length === 2) && <p>{Traduzir(pokeTipos[1].type.name)}</p>}
                    </div>
                </>
            }
        </div>
    )
}
 export default BoxNome;