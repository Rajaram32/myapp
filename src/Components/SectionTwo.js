import React from 'react'
import '../css/sectionTwo.css'
import img1 from '../img/section2/main01.webp'
import img2 from '../img/section2/main02.webp'
import img3 from '../img/section2/main03.webp'
import img4 from '../img/section2/main04.webp'
import img5 from '../img/section2/main05.webp'
import img6 from '../img/section2/main06.webp'
import img7 from '../img/section2/main07.webp'
import img8 from '../img/section2/main08.webp'
import img9 from '../img/section2/main09.webp'

const SectionTwo = () => {
    return (
        <section  className='sectionTwo'>
            <div className="sectionTwo-main">
                <div className="container sectionTwo-content">
                <div  id='demo' className="row row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img1} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>Luxery Hotel</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img2} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>Apartment Hotel</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img3} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>LuxeVista Hotel</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img4} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>Mountain Hotel</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img5} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>City Hotel</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img6} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>OceanBreeze Resort</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img7} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>Beach Hotel</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img8} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>Hotel Dark</h3>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="imageContainer"  data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" data-aos-once="true">
                            <div className="imageBox">
                                <img src={img9} alt="image1" />
                            </div>
                            <div className="aboutImg">
                                <h3>Video Home</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>

        </section>
    )
}

export default SectionTwo