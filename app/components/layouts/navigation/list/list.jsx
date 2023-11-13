import Link from 'next/link';
import React from 'react'

const List = async({list,search,filter}) => {

    const res= await fetch(list);
    const data = await res.json();

    const cats=data.meals.map((cat,index)=>{
        return(
            <li key={index} className="border-bottom" type="button">
                <Link className='w-100 d-block dropdown-item text-black' href={`/filter/${filter}=${cat[search]}`}>{cat[search]}</Link>
            </li>
        )
    })

    return (
        <div>{cats}</div>
    )
}

export default List