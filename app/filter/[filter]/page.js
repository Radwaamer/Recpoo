import Image from 'next/image';
import React from 'react';
import styles from './filter.module.css';
import Link from 'next/link';

const page = async({params}) => {
    const res= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?${params.filter.replace("%3D","=")}`);
    const data= await res.json();

    const meals=data.meals.map(meal=>{
        return(
            <div key={meal.idMeal} className={`${styles.card} col-sm-6 col-md-4 col-lg-3 p-0`}>
                <Link href={`/${meal.idMeal}`} className='d-block m-2 position-relative'>
                    <Image className='img-fluid rounded-3 w-100' src={meal.strMealThumb} alt={meal.strMeal} width={100} height={100}/>
                    <p className='position-absolute bottom-0 start-0 m-0 py-2 px-3 rounded-3 d-flex 
                    justify-content-center align-items-center text-center'>{meal.strMeal}</p>
                </Link>
            </div>
        )
    })
    return (
        <div className="meals my-5 pt-5">
            <div className="container pt-3">
            <h1 className="mb-5 text-white-50 fw-bolder">{params.filter.slice(params.filter.indexOf("D")+1)}</h1>
                <div className="row">
                    {meals}
                </div>
            </div>
        </div>
    )
}

export default page