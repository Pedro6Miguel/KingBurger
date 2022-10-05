import React from 'react'
import styles from './styles.module.scss'
import OrderIt from '../../assets/img/OrderIt.svg'

function Order() {
    return (
        <div className={styles.order}>
            <div className={styles.left}>
                <img src={OrderIt} alt="" />
                <div className={styles.information}>
                    <h4>Faça o seu pedido agora mesmo!</h4>
                    <p>Venha saborear a melhor experiência de hamburguenses artesanal<br></br> do <strong>Empires Burger</strong>, com temática medieval!</p>
                </div>
            </div>
            <div className={styles.right}>
                <button>Solicitar Pedido</button>
            </div>
        </div>
    )
}

export default Order