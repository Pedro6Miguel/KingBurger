import React from 'react'
import styles from './styles.module.scss'

import Banner2 from '../../assets/img/Banner2.svg'

function Menu() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <img src={Banner2} alt="" />
                <div className={styles.info}>
                    <h3>Escolha o seu combo<br></br> imperial, <span>peça agora!</span></h3>
                    <p>Temos vários tipos de pratos para a nossa realeza, fique<br></br> esperto porque temos sempre  promoção!</p>
                    <button>Ver Cardápio Completo</button>
                </div>
            </div>
            <div className={styles.right}>
                <h3>Cardápio imperial | Burger</h3>
                <li>
                    <h6>Classic burger ......................................................................... $49,00</h6>
                    <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
                </li>
                <li>
                    <h6>Classic burger ......................................................................... $49,00</h6>
                    <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
                </li>
                <li>
                    <h6>Classic burger ......................................................................... $49,00</h6>
                    <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
                </li>
                <li>
                    <h6>Classic burger ......................................................................... $49,00</h6>
                    <p>Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru, Tomate, Alface, Servidor do pão de batata</p>
                </li>
            </div>
        </div>
    )
}

export default Menu