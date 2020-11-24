import React, { useState } from 'react'
import ChampScreen from '../../champscreem/components'
import styles from '../styles/main.scss'
import { BodyContainer } from './BodyContainer'


export const MainScreen= () => {
    const [showList, setShowList] = useState(true)
    const [champSelected, setChampSelected] = useState({
        id:"no champ"
    })
    return (
        <div className={styles.MainContainer}>
            <div className={styles.HeaderContainer}>
                <div className={styles.HeadItem}>
                    <h3>Bienvenido</h3>
                    </div>
                <div className={styles.HeadItem}></div>
                <div className={styles.HeadItem}>
                    <img src="/images/logo.png"/>
                    </div>
            </div>
           {
                showList ?
                    <BodyContainer setChampSelected={setChampSelected} setShowList={setShowList}/>
                    :
                    <ChampScreen champSelected={champSelected.id}/>
            } 
        </div>
    )
}

export default MainScreen
