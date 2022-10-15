import React from 'react'
import styles from './styles.css'
import { useState } from 'react';

import { AiOutlineWhatsApp } from "react-icons/ai";
import Logo from '../../assets/img/Logo.svg'

function Navbar() {
    const [isShowLinks, setShowLinks] = useState(false);

    return (
        <nav className="nav">
            <img src={Logo} alt="" />
            <div className={isShowLinks ? "nav_mobile" : "nav_items"}>
                <a href=""><li>Promoção</li></a>
                <a href=""><li>Cardapio</li></a>
                <a href=""><li>Comentario</li></a>
            </div>
            <button className="contact"><AiOutlineWhatsApp size={30} /> Contato</button>
            <button onClick={() => setShowLinks(!isShowLinks)} className="responsive">
                {isShowLinks ? <svg xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-x"
                    width="28"
                    height="28"
                    color="#3B200B"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg> : <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-menu-2"
                    width="28"
                    height="28"
                    color="#3B200B"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>}
            </button>
        </nav>
    )
}

export default Navbar