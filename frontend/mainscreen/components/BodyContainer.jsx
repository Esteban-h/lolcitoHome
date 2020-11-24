import React, { useState, useEffect } from 'react'
import styles from '../styles/Body.scss'
import axios from 'axios'
import ChampContainer from './champContainer'
export const BodyContainer = ({setShowList,setChampSelected}) => {

    const [state, setState] = useState('')
    const [champions, setchampions] = useState([])
    const [newChampionsList, setNewChampionsList] = useState([])

    useEffect(async() => {
        const response = await axios({
            method: 'get',
            url: 'http://ddragon.leagueoflegends.com/cdn/10.22.1/data/en_US/champion.json',
          });

          const array = []
          for(const property in response.data.data){
              array.push(response.data.data[property])
          }

          setchampions(array)
          setNewChampionsList(array)

        
    }, [])

    const handleChange =(e)=>{
        setState(e.target.value)
        const newChampionsList=champions.filter(item=>{
            console.log(item.id)
            if(item.id.toLowerCase().includes(e.target.value.toLowerCase())){
                console.log("si contiene el texte",item.id);
                return item
            }
            return
        })
        setNewChampionsList(newChampionsList)
        console.log("Champ ")
    }

    return (
        <div className={styles.Main}>
            <div className={styles.SearchContainer}>
            <input value={state} name="champion" onChange={handleChange} type="text" placeholder="Campeon"/>
            </div>
            <div className={styles.ChampContainer}>
            {
                    newChampionsList.map((item) => {
                        return <ChampContainer setShowList={setShowList} setChampSelected={setChampSelected} key={item.id} data={item} />
                    })
                }
               
            </div>
        </div>
    )
}
