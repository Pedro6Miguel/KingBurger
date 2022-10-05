import React from 'react'
import styles from './styles.module.scss'

import burgerImages from './burgerImages'

function Publications() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {burgerImages.map((image) => {
                    return (
                        <img src={image} alt="" />
                    )
                })}
            </div>
        </div>
    )
}

export default Publications