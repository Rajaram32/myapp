import React from 'react'
import '../css/fixedComponent.css'
import img1 from '../img/fixed/ring.svg'
import img2 from '../img/fixed/cart.svg'
import { FaAngleUp } from "react-icons/fa6";


const Fixed = () => {


    return (
        <>
            <div className="rightBox">
                <div className="rb1">
                    <img src={img1} alt="ring" />
                </div>
                <div className="rb2">
                    <img src={img2} alt="cart" />
                </div>
            </div>

        </>
    )
}

export default Fixed