import React, { useEffect, useRef, useState } from 'react'
import '../css/sectionFour.css'
import img1 from '../img/section4/img1.webp'
import img2 from '../img/section4/img2.webp'
import img3 from '../img/section4/img3.webp'
import img4 from '../img/section4/img4.webp'
import img5 from '../img/section4/img5.webp'

const SectionFour = () => {
    const images = [img1, img2, img3, img4, img5,img1, img2, img3, img4, img5]
    const [slide, setSlide] = useState([])

    useState(()=>{
        setSlide([...images,...images])
    },[images])


    return (
        <section id='innerPages' className='sectionFour'>
            <div className="container pt-5"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                <div className="container4">
                    <div className="section4-main pt-5 d-flex flex-column align-items-center justify-content-center gap-4">
                        <div className="section4-Heading text-center">
                            <h1>Explore Our All Inner Page</h1>
                        </div>
                        <div className="section4-Details">
                            <p>Welcome to Moonlit, your gateway to exciting career opportunities! Whether you're a seasoned professional or
                                just starting out, our platform connects you with top employers across various industries.</p>
                        </div>
                        <div className="boxx d-flex align-items-center justify-content-center">
                            <div className="rollingImgBox d-flex align-items-center justify-content-center " >
                                {slide && slide?.map((v, i) => {
                                    return (
                                        <div className='imgBox' key={i}>
                                            <img className='rollingImg' src={v} alt="img" />
                                        </div>
                                    )
                                })}
                            </div>Z
                        </div>

                    </div>

                </div>


            </div>
        </section>
    )
}

export default SectionFour