import React from 'react'
import styles from './styles.module.scss'

import ColoredLogo from '../../assets/img/ColoredLogo.svg'
import Insta from '../../assets/img/Insta.svg'
import IFood from '../../assets/img/IFood.svg'

import Order from '../../components/Order'

function Footer() {
    return (
        <>
            <Order />
            <div className={styles.container}>
                <h3>Onde ficar a nosso castelo</h3>
                <p>Estaremos de portas abertas para a nossa realeza.</p>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15504.878061456006!2d-46.636064553205856!3d-23.508608708082225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce594ebf7aabc1%3A0x3a0ad13011905771!2sEstudio%20Rancho%2040!5e0!3m2!1spt-PT!2spt!4v1664987352530!5m2!1spt-PT!2spt"
                    height="340"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
                <div className={styles.footer}>
                    <img src={ColoredLogo} alt="" />
                    <div className={styles.socials}>
                        <a><img src={IFood} alt="" /></a>
                        <a><img src={Insta} alt="" /></a>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p><strong>2022 © EmpireBurger.</strong><span> Todos os direitos reservados.</span></p>
                </div>
            </div>
        </>
    )
}

export default Footer