import Image from 'next/image'
import React from 'react'
import styles from './join.module.css';
import instaTop from '../../../../public/images/join/instaTop.png'
import instaRight from '../../../../public/images/join/instaRight.png'
import instaBottom from '../../../../public/images/join/instaBottom.png'
import instaBlur from '../../../../public/images/join/instaBlur.png'

const Join = () => {
    return (
        <section className={`${styles.join}`}>
            <div className="container position-relative">
                <Image className={`${styles.top} d-none d-md-block position-absolute img-fluid top-0 start-0`} src={instaTop}  alt='instagram'/>
                <Image className={`${styles.right} d-none d-md-block position-absolute img-fluid top-0 end-0`} src={instaRight} alt='instagram'/>
                <Image className={`${styles.bottom} d-none d-md-block position-absolute img-fluid top-50 start-0`} src={instaBottom} alt='instagram'/>
                <div className="circle position-relative">
                    <Image className='d-block mx-auto img-fluid' src={instaBlur} alt='join us on instagram'/>
                    <div className="text position-absolute top-50 start-50 translate-middle text-white text-center">
                        <h4>Join Us :<br/>On Instagram</h4>
                        <button className='px-4 py-2 border-0 rounded-2 bg-black mt-2'>Follow Us</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Join