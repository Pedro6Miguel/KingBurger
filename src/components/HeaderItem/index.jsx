import React from 'react'
import styles from './styles.module.scss'

import HeaderBurger from '../../assets/img/HeaderBurger.png'
import HeaderDelivery from '../../assets/img/HeaderDelivery.png'
import HeaderHeadphones from '../../assets/img/HeaderHeadphones.png'

function HeaderItem() {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div>
                    <img src={HeaderBurger} alt="" />
                    <div className={styles.item}>
                        <h6>Artesanal</h6>
                        <p>Nossas receitas são<br></br> feitas com todo cuidado</p>
                    </div>
                </div>
                <span></span>
                <div>
                    <img src={HeaderDelivery} alt="" />
                    <div className={styles.item}>
                        <h6>Atendimento</h6>
                        <p>Totalmente<br></br> personalizado</p>
                    </div>
                </div>
                <span></span>
                <div>
                    <img src={HeaderHeadphones} alt="" />
                    <div className={styles.item}>
                        <h6>Artesanal</h6>
                        <p>Entregamos menos de <br></br>45 minutos</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderItem