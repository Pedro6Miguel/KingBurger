import React from 'react'
import styles from './styles.module.scss'

import IconBurger from '../../assets/img/IconBurger.svg'

function HeaderItem() {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <div>
                    <img src={IconBurger} alt="" />
                    <div className={styles.item}>
                        <h6>ARTESANAL</h6>
                        <p>Nossas receitas são<br></br> feitas com todo cuidado</p>
                    </div>
                </div>
                <span></span>
                <div>
                    <img src={IconBurger} alt="" />
                    <div className={styles.item}>
                        <h6>Artesanal</h6>
                        <p>Nossas receitas são<br></br> feitas com todo cuidado</p>
                    </div>
                </div>
                <span></span>
                <div>
                    <img src={IconBurger} alt="" />
                    <div className={styles.item}>
                        <h6>Artesanal</h6>
                        <p>Nossas receitas são<br></br> feitas com todo cuidado</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderItem