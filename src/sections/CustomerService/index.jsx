import React from 'react'
import styles from './styles.module.scss'

import Girl from '../../assets/img/Girl.png'

function CustomerService() {
    return (
        <div className={styles.container}>
            <img src={Girl} alt="" />
            <div>
                <h3><span className={styles.first}>Atendimento</span><br></br> <span className={styles.custom}>Personalizado</span></h3>
                <p>Todos os nossos clientes são tratados como rei e <br></br>rainha, com a nossa colunaria artesanal.</p>
                <button>Cardápio Imperial</button>
            </div>
        </div>
    )
}

export default CustomerService