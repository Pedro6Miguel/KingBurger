import React from 'react'
import styles from './styles.module.scss'

import Deli from '../../assets/img/Deli.png'
import Whats from '../../assets/img/Whats.svg'
import Deliv from '../../assets/img/Deliv.svg'
import Dessert from '../../assets/img/Dessert.svg'
import Food from '../../assets/img/Food.svg'


function Deliveries() {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={Deli} alt="" />
            <div className={styles.info}>
                <h3>Nossas entregas</h3>
                <li>
                    <img src={Whats} alt="" />
                    <div>
                        <h6>Whatsapp</h6>
                        <p>Vamos direto ao ponto, sem perder tempo!</p>
                    </div>
                </li>
                <li>
                    <img src={Deliv} alt="" />
                    <div>
                        <h6>Entrega</h6>
                        <p>Entregamos menos de 45 minutos na porta da sua casa!</p>
                    </div>
                </li>
                <li>
                    <img src={Dessert} alt="" />
                    <div>
                        <h6>Sobremesa</h6>
                        <p>Pedidos assima de 100 reais, ganham brindes.</p>
                    </div>
                </li>
                <li>
                    <img src={Food} alt="" />
                    <div>
                        <h6>IFood</h6>
                        <p>Nossa loja é Top 1 da região!</p>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default Deliveries