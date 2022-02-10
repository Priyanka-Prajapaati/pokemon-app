import React, { useState } from 'react'
import Description from './Description'
import styles from '../../styles/Home.module.css';

const PokemonImage = ({id,name,image,type,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,
    bs4,bs5,bs6}) => {
    const style = `${styles}.thumbContainer ${type}`
    const [show,setShow] = useState(false)
    return (
        <div className ={style}>
            <div className={styles.number}>
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className={styles.detailWrapper}>
                <h3>{name.toUpperCase() }</h3>
                <small>Type : {type}</small>
                <button className={styles.pokeinfo} onClick={()=>setShow(!show)}>{show===true?"Know less...":"Know more..."}</button>
                {show===true?<Description weightpok={weight} heightpok={height} pokstat1={stat1}
                pokstat2={stat2}
                pokstat3={stat3}
                pokstat4={stat4}
                pokstat5={stat5}
                pokstat6={stat6}

                posbs1={bs1}
                posbs2={bs2}
                posbs3={bs3}
                posbs4={bs4}
                posbs5={bs5}
                posbs6={bs6}
                 /> :<></>}

            </div>

        </div>
    )
}

export default PokemonImage