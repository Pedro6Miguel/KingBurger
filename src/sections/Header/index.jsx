import React from 'react'
import styles from './styles.module.scss'
import Navbar from '../../components/Navbar'
import HeaderItem from '../../components/HeaderItem'

function Header() {
    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles.header}>
                <div>
                    <h5>Uma nova experiência!</h5>
                    <h1>KING <span>BURGER</span></h1>
                    <p>Para quem tem um Apetite de um REI!</p>
                    <button>Comprar</button>
                </div>
            </div>
            <HeaderItem />
        </div>
    )
}

export default Header