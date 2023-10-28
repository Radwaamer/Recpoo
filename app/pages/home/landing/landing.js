import React from 'react'
import styles from './landing.module.css';

const Landing = () => {
    return (
        <section className={`${styles.landing} text-white w-100`}>
            <div className="container d-flex flex-column justify-content-center h-100">
                <h1 className="fw-bolder">BE THE CHEF OF YOUR KITCHEN</h1>
                <p>From Breakfast to Dinner, We Have You Covered</p>
                <form className="w-50" action="">
                <input className="form-control w-100 border-top-0 border-end-0 bg-transparent text-white" 
                type="search" name="search" id="meal-search" placeholder="Search for a meal.." />
                </form>
            </div>
        </section>
    )
}

export default Landing