import React, { useState } from 'react'
import '../css/header.css'

import img2 from '../img/headerLogo-2.png'
import { FaAngleUp, FaCartShopping } from 'react-icons/fa6'

const Header = () => {
    const [style, setStyle] = useState({ header: "header2", arrow: "none" })

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 150) {
            setStyle({...style,header:"header2-active",arrow:"flex"})
        }
        if (document.documentElement.scrollTop < 150) {
             setStyle({...style,header:"header2",arrow:"none"})
        }


    }

    return (
        <>
            <div id='header' className={style.header}>
                <div className="headerLogo2">
                    <img src={img2} alt="Logo2" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#demo">Demo</a></li>
                        <li><a href="#feature">Feature</a></li>
                        <li><a href="#innerPages">Inner pages</a></li>
                        <li><a href="#review">Reveiw</a></li>
                    </ul>
                </nav>

                <button className='buynowBt2'>
                    <div>Buy now</div>
                    <FaCartShopping className="cart" />
                </button>
            </div>


            <a href="#top" >
                <div className="upArrow" style={{display:style.arrow}}>

                    <FaAngleUp />
                </div >
            </a>
        </>
    )
}

export default Header