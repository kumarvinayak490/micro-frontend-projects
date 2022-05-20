import {mount} from 'auth/AuthApp'
import React, {useRef,useEffect} from 'react'

export default function AuthComponent(){
    const ref = useRef(null)

    useEffect(()=>{
        mount(ref.current)
    });

    return(
        <div ref={ref}></div>
    )

}