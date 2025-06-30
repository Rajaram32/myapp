import React from 'react'
import '../css/sectionOne.css'
import { FaCartShopping } from 'react-icons/fa6'

const SectionOne = () => {
    return (
        <section id='top'  className='sectionOne d-flex justify-content-center'>
            <div className="container sectionOne-content">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1 id='mainTitle' data-aos="fade-up" data-aos-duration="1000" className='text-white '>
                            Moonlit Luxury Hotel <br />
                            <span>React</span> Template
                        </h1>
                        <div className="col-12 d-flex justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                            <button>
                                <div>Buy now</div>
                                <FaCartShopping className="sectionOne-cart" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>


    )
}

export default SectionOne