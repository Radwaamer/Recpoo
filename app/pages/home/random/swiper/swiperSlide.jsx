import React from 'react';
import Image from 'next/image';
import styles from './swiper.module.css';
import HandleIcon from './handleIcon';

const SwiperSli = async() => {
    const res= await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data= await res.json();
    return (
        <div className={`${styles.recipe} position-relative border rounded-4 p-0`}>
            <HandleIcon />
            <Image className='img-fluid rounded-top-4 d-block mx-auto w-100' width={100} height={100} src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal} />
            <div className={`${styles.text} text-center bg-black text-white p-3 rounded-bottom-4`}>
                <h4>{data.meals[0].strMeal}</h4>
                <p className='text-white-50'>{data.meals[0].strCategory}</p>
                <div className={`${styles.details} d-flex justify-content-between align-items-center gap-2`}>
                    <p className='m-0'>{data.meals[0].strTags}</p>
                    <span>{data.meals[0].strArea}</span>
                </div>
            </div>
        </div>
    )
}

export default SwiperSli;