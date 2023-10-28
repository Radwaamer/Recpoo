'use client'
import React, { useState } from 'react'

const HandleIcon = () => {
    const [love,setLove]=useState(false);
    return (
        <div className='position-absolute' style={{top: "4%", right: "6%", width:"fit-content"}} onClick={()=>setLove(!love)}>
            <i className={`${love?"fa-solid fa-heart":"fa-regular fa-heart"} fs-4 text-danger`}></i>
        </div>
    )
}

export default HandleIcon