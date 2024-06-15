import React, { useRef } from 'react';
import Sidebar from "../components/Sidebar";
import { useAuth } from '../context/authContext';
import { FormPage } from '../components/Formpage';

const  Addpage =()=> {

        const [auth] = useAuth()
        setTimeout(()=>{
            console.log(auth)
        },5000)

    return (
        <>
        
        <div style={{display:"flex"}}>
        <Sidebar/>
        <FormPage/>
        </div>
        </>
            
    )
}

export default Addpage