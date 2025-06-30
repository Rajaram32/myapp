import React from 'react'
import '../css/headerOne.css'
import img1 from '../img/headerLogo.svg'

const HeaderOne = () => {
    return (
        <>
            <div className="header1">
                <div className="headerLogo1">
                    <img src={img1} alt="Logo1" />
                </div>
                <button className='buynowBt1'>Buy now</button>
            </div>

        </>
    )
}

export default HeaderOne