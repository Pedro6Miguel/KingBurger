import React from 'react'
import styles from './styles.module.scss'

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

import ProfilePicture from '../../assets/img/ProfilePicture.png'

function Reviews() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <div className={styles.body}>
            <h3>Nossa realeza</h3>
            <p className={styles.body_text}>A satisfação de nossos clientes em primeiro lugar!</p>

            <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }} className={styles.carousel}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={styles.inner_carousel}>
                    <div className={styles.item}>
                        <p className={styles.review}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin.”</p>
                        <div className={styles.person_info}>
                            <img src={ProfilePicture} alt="" />
                            <div>
                                <h5>Carla Gomes</h5>
                                <p>23 Anos • Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.review}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin.”</p>
                        <div className={styles.person_info}>
                            <img src={ProfilePicture} alt="" />
                            <div>
                                <h5>Carla Gomes</h5>
                                <p>23 Anos • Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.review}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin.”</p>
                        <div className={styles.person_info}>
                            <img src={ProfilePicture} alt="" />
                            <div>
                                <h5>Carla Gomes</h5>
                                <p>23 Anos • Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.review}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin.”</p>
                        <div className={styles.person_info}>
                            <img src={ProfilePicture} alt="" />
                            <div>
                                <h5>Carla Gomes</h5>
                                <p>23 Anos • Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.review}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin.”</p>
                        <div className={styles.person_info}>
                            <img src={ProfilePicture} alt="" />
                            <div>
                                <h5>Carla Gomes</h5>
                                <p>23 Anos • Designer</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <p className={styles.review}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin.”</p>
                        <div className={styles.person_info}>
                            <img src={ProfilePicture} alt="" />
                            <div>
                                <h5>Carla Gomes</h5>
                                <p>23 Anos • Designer</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Reviews