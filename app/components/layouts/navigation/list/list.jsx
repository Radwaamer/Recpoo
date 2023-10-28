import React from 'react'

const List = async({list,search}) => {

    // const res= await fetch(list);
    // const data = await res.json();
    const data = [0,1,2,3,4,5,6,7,8]

    // const cats=data.meals.map((cat,index)=>{
    const cats=data.map((cat,index)=>{
        return(
            // <li key={index} className="dropdown-item border-bottom" type="button">{cat[search]}</li>
            <li key={index} className="dropdown-item border-bottom" type="button">liii</li>
        )
    })

    return (
        <div>{cats}</div>
    )
}

export default List