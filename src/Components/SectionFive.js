import React, { useState } from 'react'
import '../css/sectionFive.css'
import img1 from '../img/section5/feature-01.webp'
import img2 from '../img/section5/feature-02.webp'
import img3 from '../img/section5/feature-03.webp'
import img4 from '../img/section5/star-icon.png'
import img5 from '../img/section5/author.svg'

const SectionFive = () => {


    const userComments = [
        {
            id: 1,
            name: "icahmina",
            purpose: "Desgin Quality",
            message: "Clean, Pro design and easy to navigate Really that what I'm looking for? Regarding the pricing is really affordable big time, thank you for the beautiful design and touch.",
            img: img5,
            star: 5
        },
        {
            id: 2,
            name: "rdr2711",
            purpose: "Customer Support",
            message: "Amazing customer service. They answer as quickly as possible and take off so much work off your hands! Though, I wish they explained/offered code snippets of their solutions so the customer understood what they did and didn't have to keep ticketing them for every problem.",
            img: img5,
            star: 5
        },
        {
            id: 3,
            name: "thebirdbath",
            purpose: "Features Availibility",
            message: "Thank you very much to support for helping me adjust the slider options in this theme. They we're excellent and helping me. Total recommend!",
            img: img5,
            star: 5
        },
        {
            id: 4,
            name: "ayuub",
            purpose: "Code Quality",
            message: "Amazing theme easy to customize well done team.",
            img: img5,
            star: 5
        },
        {
            id: 5,
            name: "Customer Support",
            purpose: "Customer Support",
            message: "They are very good with the support for this theme. Thanks for that!",
            img: img5,
            star: 5
        },
        {
            id: 6,
            name: "icahmina",
            purpose: "Customer Support",
            message: "Wonderful supper fast Support Team. I had a critical problem and within a hour they solve it. I'm very satisfied",
            img: img5,
            star: 5
        },
    ]


    const [buttonContent, setButtonContent] = useState("View All Reviews");
    const [clickButton, setClickeButton] = useState(false)

    const [buttonStyle, setButtonStyle] = useState({
        classname: "viewButton",
        innerText: "View All Reviews",
        margin: "-150px"
    })

    const handleClikeButton = () => {

        const buttonBox = document.getElementById("bottonBox")
        console.log(buttonBox.innerText)
        if (clickButton === false) {
            setButtonStyle({
                classname: "viewButton-active",
                innerText: "View Less Reviews",
                margin: "0px"
            })
        }
        else {
            setButtonStyle({
                classname: "viewButton",
                innerText: "View All Reviews",
                margin: "-150px"
            })
        }
        setClickeButton(!clickButton)
    }



    return (
        <section className="sectionFive" style={{ marginBottom: buttonStyle.margin }}>
            <div className="container d-flex flex-column">
                <div className="section5-box1 d-flex align-items-center justify-content-center flex-wrap-reverse  flex-lg-nowrap">
                    <div className="section5-box1-content d-flex flex-column align-items-center justify-content-center gap-1">
                        <div className="section5-box1-content-header">
                            <h2>Restaurant Landing Page & Restaurant Menu Types Page Design</h2>

                        </div>
                        <div className="section5-box1-content-detail">
                            <p> At moonlit we believe that great food is more than just a meal – it’s an experience. Our chefs blend creativity and to serve up unique dishes</p>
                        </div>
                    </div>
                    <div className="section5-box1-image d-flex align-items-center justify-content-center gap-1">
                        <img src={img1} alt="img" />
                    </div>
                </div>
                <div className="section5-box1 d-flex align-items-center justify-content-center flex-wrap flex-lg-nowrap">
                    <div className="section5-box1-image d-flex align-items-center justify-content-center gap-1">
                        <img src={img2} alt="img" />
                    </div>
                    <div className="section5-box1-content d-flex flex-column align-items-center justify-content-center gap-1">
                        <div className="section5-box1-content-header">
                            <h2>Experience Matched Comfort in Our Deluxe Rooms</h2>

                        </div>
                        <div className="section5-box1-content-detail">
                            <p>Step into pure elegance with our Luxury Suites, where every detail is crafted for ultimate comfort. With panoramic views of the city.</p>
                        </div>
                    </div>
                </div>
                <div className="section5-box1 d-flex align-items-center justify-content-center flex-wrap-reverse  flex-lg-nowrap">
                    <div className="section5-box1-content d-flex flex-column align-items-center justify-content-center gap-1">
                        <div className="section5-box1-content-header">
                            <h2>Plan Your Getaway Book the Best Room for You Today</h2>

                        </div>
                        <div className="section5-box1-content-detail">
                            <p>At moonlit we believe that great food is more than just a meal – it’s an experience. Our chefs blend creativity and to serve up unique dishes</p>
                        </div>
                    </div>
                    <div className="section5-box1-image d-flex align-items-center justify-content-center gap-1">
                        <img src={img3} alt="img" />
                    </div>
                </div>
                <div id='review' className="section5-heading text-center">
                    <h2>What Our Customer Saying</h2>
                </div>
                <div className='cmd-box d-flex flex-column align-items-center justify-content-center'>
                    <div className="section5-cmds-container row row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
                        {userComments && userComments?.map((v, i) => {
                            let { id, name, purpose, message, img, star } = v;
                            return (
                                <div key={id} className="col">
                                    <div id={`box${id}`} className="section5-command bg-white border rounded-3 d-flex flex-column gap-4 px-5 py-5" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                                        <div className="reason fs-4 text-black-50 ">
                                            For <span className=' fw-semibold text-black'>{purpose}</span>
                                        </div>
                                        <div className="section5-message border-bottom border-1">
                                            {message}
                                        </div>
                                        <div className="section5-userDetail d-flex align-items-center gap-4">
                                            <div className="profileImg d-flex align-items-center justify-content-center border border-0 rounded-circle overflow-hidden">
                                                <img src={img} alt="author" />
                                            </div>
                                            <div className="profile d-flex flex-column justify-content-center">
                                                <div className="profileName fw-semibold fs-5">
                                                    {name}
                                                </div>
                                                <div className="rating">
                                                    <img src={star === 5 ? img4 : img5} alt="star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                        {/* <div className="col">
                        <div className="section5-command bg-white border rounded-3 d-flex flex-column gap-4 px-5 py-5">
                            <div className="reason fs-4 text-black-50 ">
                                For <span className=' fw-semibold text-black'>Design Quality</span>
                            </div>
                            <div className="section5-message border-bottom border-1">
                                Clean, Pro design and easy to navigate Really that what I'm looking for? Regarding the pricing is really affordable big time, thank you for the beautiful design and touch.
                            </div>
                            <div className="section5-userDetail d-flex align-items-center gap-4">
                                <div className="profileImg d-flex align-items-center justify-content-center border border-0 rounded-circle overflow-hidden">
                                    <img src={img5} alt="author" />
                                </div>
                                <div className="profile d-flex flex-column justify-content-center">
                                    <div className="profileName fw-semibold fs-5">
                                        icahmina
                                    </div>
                                    <div className="rating">
                                        <img src={img4} alt="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="section5-command bg-white border rounded-3 d-flex flex-column gap-4 px-5 py-5">
                            <div className="reason fs-4 text-black-50 ">
                                For <span className=' fw-semibold text-black'>Design Quality</span>
                            </div>
                            <div className="section5-message border-bottom border-1">
                                Clean, Pro design and easy to navigate Really that what I'm looking for? Regarding the pricing is really affordable big time, thank you for the beautiful design and touch.
                            </div>
                            <div className="section5-userDetail d-flex align-items-center gap-4">
                                <div className="profileImg d-flex align-items-center justify-content-center border border-0 rounded-circle overflow-hidden">
                                    <img src={img5} alt="author" />
                                </div>
                                <div className="profile d-flex flex-column justify-content-center">
                                    <div className="profileName fw-semibold fs-5">
                                        icahmina
                                    </div>
                                    <div className="rating">
                                        <img src={img4} alt="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="section5-command bg-white border rounded-3 d-flex flex-column gap-4 px-5 py-5">
                            <div className="reason fs-4 text-black-50 ">
                                For <span className=' fw-semibold text-black'>Design Quality</span>
                            </div>
                            <div className="section5-message border-bottom border-1">
                                Clean, Pro design and easy to navigate Really that what I'm looking for? Regarding the pricing is really affordable big time, thank you for the beautiful design and touch.
                            </div>
                            <div className="section5-userDetail d-flex align-items-center gap-4">
                                <div className="profileImg d-flex align-items-center justify-content-center border border-0 rounded-circle overflow-hidden">
                                    <img src={img5} alt="author" />
                                </div>
                                <div className="profile d-flex flex-column justify-content-center">
                                    <div className="profileName fw-semibold fs-5">
                                        icahmina
                                    </div>
                                    <div className="rating">
                                        <img src={img4} alt="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="section5-command bg-white border rounded-3 d-flex flex-column gap-4 px-5 py-5">
                            <div className="reason fs-4 text-black-50 ">
                                For <span className=' fw-semibold text-black'>Design Quality</span>
                            </div>
                            <div className="section5-message border-bottom border-1">
                                Clean, Pro design and easy to navigate Really that what I'm looking for? Regarding the pricing is really affordable big time, thank you for the beautiful design and touch.
                            </div>
                            <div className="section5-userDetail d-flex align-items-center gap-4">
                                <div className="profileImg d-flex align-items-center justify-content-center border border-0 rounded-circle overflow-hidden">
                                    <img src={img5} alt="author" />
                                </div>
                                <div className="profile d-flex flex-column justify-content-center">
                                    <div className="profileName fw-semibold fs-5">
                                        icahmina
                                    </div>
                                    <div className="rating">
                                        <img src={img4} alt="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="section5-command bg-white border rounded-3 d-flex flex-column gap-4 px-5 py-5">
                            <div className="reason fs-4 text-black-50 ">
                                For <span className=' fw-semibold text-black'>Design Quality</span>
                            </div>
                            <div className="section5-message border-bottom border-1">
                                Clean, Pro design and easy to navigate Really that what I'm looking for? Regarding the pricing is really affordable big time, thank you for the beautiful design and touch.
                            </div>
                            <div className="section5-userDetail d-flex align-items-center gap-4">
                                <div className="profileImg d-flex align-items-center justify-content-center border border-0 rounded-circle overflow-hidden">
                                    <img src={img5} alt="author" />
                                </div>
                                <div className="profile d-flex flex-column justify-content-center">
                                    <div className="profileName fw-semibold fs-5">
                                        icahmina
                                    </div>
                                    <div className="rating">
                                        <img src={img4} alt="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="section5-command bg-white border rounded-3 d-flex flex-column gap-4 px-5 py-5">
                            <div className="reason fs-4 text-black-50 ">
                                For <span className=' fw-semibold text-black'>Design Quality</span>
                            </div>
                            <div className="section5-message border-bottom border-1">
                                Clean, Pro design and easy to navigate Really that what I'm looking for? Regarding the pricing is really affordable big time, thank you for the beautiful design and touch.
                            </div>
                            <div className="section5-userDetail d-flex align-items-center gap-4">
                                <div className="profileImg d-flex align-items-center justify-content-center border border-0 rounded-circle overflow-hidden">
                                    <img src={img5} alt="author" />
                                </div>
                                <div className="profile d-flex flex-column justify-content-center">
                                    <div className="profileName fw-semibold fs-5">
                                        icahmina
                                    </div>
                                    <div className="rating">
                                        <img src={img4} alt="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>
                    <div id='bottonBox' className={buttonStyle.classname}>
                        <button onClick={() => handleClikeButton()}>
                            {buttonStyle.innerText}
                        </button>
                    </div>
                </div>




            </div>
        </section>
    )


}

export default SectionFive