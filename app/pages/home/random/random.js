import React from 'react'
import Swipe from './swiper/swiper.jsx'
import SwiperSli from './swiper/swiperSlide.jsx'

const Random = () => {
    return (
        <section className="random my-5">
            <div className="container">
                <h3 style={{color:"var(--gold-color)",textShadow: "1px 3px black"}} className='mb-4 fw-bold'>Descover Random Recipes:</h3>
                <Swipe>
                    <SwiperSli />
                </Swipe>
            </div>
        </section>
    )
}

export default Random