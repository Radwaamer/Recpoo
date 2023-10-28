import Image from 'next/image'
import React from 'react'
import chef from "../../../../public/images/chef.png"

const About = () => {
    return (
        <section className="about mb-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6 mb-3 m-md-0">
                        <Image className='img-fluid w-100' src={chef} alt='about us' />
                    </div>
                    <div className="col-md-6 text-center">
                        <h4 style={{color:"var(--gold-color)",textShadow: "1px 2px black"}} className='mb-4 fw-bold'>About Us</h4>
                        <p className='text-white' style={{lineHeight:"var(--line-height)"}}>We are a passionate community of pastry enthusiasts dedicated to sharing delicious 
                            and easy-to-make recipes. Our team of bakers and cooking enthusiasts work tirelessly 
                            to bring you the best pastry recipes, helpful tips, and tricks to help you achieve 
                            perfect desserts every time.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About