import React from 'react'
import styles from './styles.module.scss'

import burgerImages from './burgerImages'

function Publications() {
    return (
        <div className={styles.container}>
            <div className={styles.instagram}>
                <h3>Publicações do instagram</h3>
                <p>Todos os nossos clientes são tratados como rei e rainha, com a nossa colunaria artesanal.</p>
            </div>
            <div className={styles.content}>
                {burgerImages.map((image) => {
                    return (
                        <div>
                            <img src={image} alt="" />
                        </div>
                    )
                })}
            </div>
            <div className={styles.looptext}>
                <div>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                    <h3>• #empireburger</h3>
                </div>
            </div>
        </div>
    )
}

export default Publications