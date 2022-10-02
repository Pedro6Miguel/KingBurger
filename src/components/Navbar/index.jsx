import React from 'react'
import styles from './styles.module.scss'

import Logo from '../../assets/img/Logo.svg'

function Navbar() {
    return (
        <nav className={styles.nav}>
            <img src={Logo} alt="" />
            <div>
                <li>asdasd</li>
                <li>asdasda</li>
                <li>asdasd</li>
                <li>sdasdasd</li>
            </div>
            <div>
                <li>Contaadsasdcto</li>
            </div>
        </nav>
    )
}

export default Navbar