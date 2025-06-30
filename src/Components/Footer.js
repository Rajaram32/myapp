import React from 'react'
import '../css/footer.css'
import { FaCartShopping } from 'react-icons/fa6'
import img1 from '../img/footer/floating-01.webp'
import img2 from '../img/footer/floating-02.webp'

const Footer = () => {
    return (
        <footer className='d-flex align-items-center justify-content-center'>
            <div className="footerImage1 d-none d-xl-flex">
                <img src={img1} alt="footerImage1" />
            </div>
            <div className="footerContent text-center d-flex flex-column align-items-center justify-content-center">
                <div className="footerTitle"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <h1>Create Your Successful
                        Hotel WebsiteX</h1>
                </div>
                <div className="footerBuyNowBtn"  data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                    <button>
                        <span>Buy Now</span> <FaCartShopping className="Footercart" />
                    </button>
                </div>
            </div>
            <div className="footerImage2 d-none d-xl-flex">
                <img src={img2} alt="footerImage2" />

            </div>

        </footer>
    )
}

export default Footer