"use client"

import { useEffect } from "react"

const Import = () => {
    useEffect(()=>{
        import("../node_modules/bootstrap/dist/js/bootstrap.min.js");
        import("../node_modules/@fortawesome/fontawesome-free/js/all.min.js");
    },[])
    return (
        <></>
    )
}

export default Import