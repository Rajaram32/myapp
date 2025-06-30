import React from 'react'
import '../css/sectionThree.css'
import img1 from '../img/section3/img01.png'
import img2 from '../img/section3/img02.png'
import img3 from '../img/section3/img03.svg'
import img4 from '../img/section3/img04.svg'
import img5 from '../img/section3/img05.svg'
import img6 from '../img/section3/img06.svg'
import img7 from '../img/section3/img07.svg'
import img8 from '../img/section3/img08.svg'
import img9 from '../img/section3/img09.svg'
import img10 from '../img/section3/img10.svg'
import img11 from '../img/section3/img11.svg'

const SectionThree = () => {
    return (
        <section id='feature' className='sectionThree py-5'>
            <div className="container py-3">
                <div className="row row-cols-1 gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <div className="col d-flex justify-content-center">
                        <div className="keyFeature py-2 px-3  rounded-2">
                            Key Feature
                        </div>
                    </div>
                    <div className="section3-heading col d-flex justify-content-center">
                        <h1 className='text-center'>Essential Features</h1>
                    </div>
                </div>
                <div className="row mt-5 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img1} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> React Template</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Moonlit is a unique React template built with React 18 and the latest Bootstrap CSS. It offers a modern, responsive design for creating powerful web applications.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column  gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img2} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> Build With Npm</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p> Moonlit is built with npm, streamlining package management and project setup. This ensures that all dependencies and tools are efficiently handled, making development and maintenance straightforward.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img3} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> Full Responsive</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Responsive web design is essential in today's digital landscape, providing an optimal viewing experience across a wide range of devices, from desktop computers to mobile phones.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img4} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4>Bootstrap 5.3</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Bootstrap 5.3 is a powerful and popular front-end framework that simplifies the development option responsive and mobile-first websites. This of version introduces and improvements.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img5} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> Fast Performance</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Fast performance is crucial for the success of web applications, significantly impacting user experience, engagement, and retention. Users expect websites to load quickly and instantly</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img6} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> 3rd-Party Plugins</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Regular updates are crucial for maintaining the performance, security, and relevance of any software or digital platform.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img7} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> Quick Installation</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Quick installation is a significant advantage in software and web development, offering users and developers a seamless and efficient setup process.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img8} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> Sticky Headers & Sidebars</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Sticky headers and sidebars are valuable design elements in modern web development, enhancing both navigation and user experience.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img9} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> Easy Customization</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Easy customization is a key feature in modern web development, enabling developers and designers to tailor websites to specific needs and preferences efficiently.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img10} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> Seo Optimized</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>SEO optimization is essential for enhancing the visibility and discoverability of websites in search engine results. By employing best practices such as keyword research, high-quality creation.</p>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="section3-boxes d-flex flex-column gap-3"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                            <div className="section3-logos">
                                <img src={img11} alt="logos" />
                            </div>
                            <div className="section3-logoes-title">
                                <h4> Update Regular</h4>
                            </div>
                            <div className="section3-logos-content">
                                <p>Regular updates are crucial for maintaining the performance, security, and relevance of any software or digital platform.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionThree