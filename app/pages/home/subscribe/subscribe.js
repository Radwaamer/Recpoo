import React from 'react'
import styles from './subscribe.module.css';

const Subscribe = () => {
    return (
        <section className={`${styles.subscribe} my-5`}>
            <div className="container">
                <p className='text-center text-white fs-4'>Stay up-to-date with our latest pastry recipes.<br /> Subscribe now!</p>
                <form className='mx-auto d-flex w-50 position-relative justify-content-center' action="">
                    <input className='form-control px-3 py-2 rounded-end-0 w-50' type="email" name="" id="" placeholder='Email' />
                    <button className='px-3 py-2 rounded-2 border-0 text-center rounded-start-0' type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Subscribe