import React from 'react'
import styles from './styles.module.scss'

import { AiOutlineWhatsApp } from "react-icons/ai";
import Logo from '../../assets/img/Logo.svg'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <img src={Logo} alt="" />
            <span className={styles.nav_items}>
                <a href=""><li>Promoção</li></a>
                <a href=""><li>Cardapio</li></a>
                <a href=""><li>Comentario</li></a>
                <a href=""><li>Contato</li></a>
            </span>
            <button><AiOutlineWhatsApp size={30} /> Contato</button>
        </nav>
    )
}

export default Navbar