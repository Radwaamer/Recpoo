"use client"
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './meal.module.css';

const page = () => {
    const params= useParams();
    const [data,setData]=useState({});

    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealDetails}`)
        .then(res=>res.json())
        .then(dt=>setData(dt.meals[0]))
    },[]);

    let instructions= data.strInstructions;
    if (data.strInstructions!=undefined){
        instructions=data.strInstructions.split(".");
        instructions=instructions.map((instr,index)=>{
            if(instr.trim()!=""){
                return(
                    <p key={index}>{index+1}- {instr}.</p>
                )
            }
        })
    }

    const ingrediente=[];
    for(let i=1;i<=20;i++){
        if(data[`strIngredient${i}`]==null || data[`strIngredient${i}`]==""){
            break;
        }else{
            ingrediente.push(
                <div key={i} className={`${styles.ingrediente} col-sm-6 col-md-4`}>
                    <div className="ingredient text-center d-flex align-items-center justify-content-center flex-column">
                    <Image className="img-fluid" src={`https://www.themealdb.com/images/ingredients/${data[`strIngredient${i}`]}-Small.png`} alt={data[`strIngredient${i}`]} width={100} height={100} unoptimized/>
                    <p className="mt-2">{data[`strMeasure${i}`]} {data[`strIngredient${i}`]}</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <section className="meal text-white my-5 pt-5">
            <div className="container pt-3">
                <h1 className="mb-5 text-white-50 fw-bolder">{data.strMeal}</h1>

                <div className="row gap-1 justify-content-between">

                    <div className={`${styles.info} col-lg-5`}>
                        <Image className="img-fluid rounded-3 w-100" src={data.strMealThumb} alt={data.strMeal} width={100} height={100} />
                        {(data.strTags!=null && data.strTags!="") &&
                            <div className="d-flex gap-2 align-items-center mt-3 mb-3">
                                <h5 className="m-0">Tags:</h5>
                                <p className="m-0">{data.strTags}</p>
                            </div>
                        }
                        {(data.strYoutube!=null && data.strYoutube!="") &&
                            <div className="d-flex gap-2 align-items-center mt-3 mb-3">
                                <h5 className="m-0">Watch It On Youtube:</h5>
                                <a className="text-white" href={data.strYoutube} target='blank'>{data.strMeal}</a>
                            </div>
                        }
                    </div>

                    <div style={{height:"36rem", overflow:"auto"}} className={`${styles.ingredientes} col-lg-6 mt-5 mt-lg-0`}>
                        <h3 style={{color:"var(--gold-color)"}} className="mb-4">Ingredients</h3>
                        <div className="row">
                            {ingrediente}
                        </div>
                    </div>

                </div>

                <div className={`${styles.instructions}`}>
                    <h3 className="pt-5 pb-3">Instructions</h3>
                    {instructions}
                </div>

            </div>
        </section>
    )
}

export default page