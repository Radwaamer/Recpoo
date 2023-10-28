import React from 'react'

const List = async({list,search}) => {

    const res= await fetch(list);
    const data = await res.json();

    const cats=data.meals.map((cat,index)=>{
        return(
            <li key={index} className="dropdown-item border-bottom" type="button">{cat[search]}</li>
        )
    })

    return (
        <div>{cats}</div>
    )
}

export default List