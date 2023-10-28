import React from 'react'
import Breakfast from '../../../../public/images/categories/breakfast.jpg'
import Dessert from '../../../../public/images/categories/dessert.jpg'
import Side from '../../../../public/images/categories/side dish.jpg'
import Vegan from '../../../../public/images/categories/vegan.jpg'
import styles from './categories.module.css'
import Image from 'next/image'

const Categories = async() => {
    const numbers= [12,2,8,10];

    const res= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    const data= await res.json();

    const cats=[Breakfast,Dessert,Side,Vegan].map((cat,index)=>{
        return (
            <div key={index} className={`${styles.image} col-12 col-md-6 col-lg-3 p-0 position-relative`}>
            <Image className='img-fluid d-block mx-auto w-100' src={cat} alt={data.categories[numbers[index]].strCategory}/>
            <p className={`${styles.text} position-absolute bottom-0 start-0 m-0 py-2 px-3 rounded-2`}>{data.categories[numbers[index]].strCategoryDescription}</p>
        </div>
        )
    });


    return (
        <section className={`${styles.categories}`}>
            <div className="row m-0">
                {cats}
            </div>
        </section>
    )
}

export default Categories;