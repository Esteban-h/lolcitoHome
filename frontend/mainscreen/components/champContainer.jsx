import React from 'react'
import styles from '../styles/Champ.scss'
const ChampContainer = ({data, setShowList, setChampSelected}) => {
    const handleClick = () =>{
        console.log("clicked to show",data)
        setShowList (false)
        setChampSelected(data)
    }
    console.log("Campeon Seleccionado", setChampSelected)
    return (
        <div className={styles.Main}>
            <div className={styles.Card} onClick={handleClick}>

            
            <img src={"http://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/"+data.image.full}/>
            
                <h4>
                   {data.id}
                </h4>
            
            <p>
              {data.title.charAt(0).toUpperCase()+data.title.slice(1)}
            </p>
            </div>      
        </div>
    )
}

export default ChampContainer
