import React from 'react'
import styles from './styles.module.scss'

import Offer1 from '../../assets/img/Offer1.svg'
import Offer2 from '../../assets/img/Offer2.svg'
import Offer3 from '../../assets/img/Offer3.svg'
import Schedule from '../../assets/img/Schedule.svg'

function Offers() {
    return (
        <div className={styles.container}>
            <h5>OFERTAS ESPECIAIS</h5>
            <p className={styles.offers}>Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque sempre estamos mudando o nosso cardapio.</p>
            <div className={styles.grid}>
                <div className={styles.first_offer}>
                    <img src={Offer1} alt="" />
                </div>
                <div className={styles.second_offer}>
                    <img src={Offer2} alt="" />
                </div>
                <div className={styles.third_offer}>
                    <img src={Offer3} alt="" />
                </div>
                <div className={styles.schedule}>
                    <img src={Schedule} alt="" />
                    <span></span>
                    <div>
                        <h5>HORÁRIO DE FUNCIONAMENTO</h5>
                        <p>Segunda-feira a sexta-feira: 17h00 - 23h00</p>
                        <p>Sabado a Domíngo: 18h00 - 23h00</p>
                    </div>
                </div>
                <div className={styles.instagram}>
                    <p>Não esqueça de marcar a gente no Instagram:</p>
                    <h5>#EMPIREBURGER</h5>
                </div>
            </div>
        </div>
    )
}

export default Offers