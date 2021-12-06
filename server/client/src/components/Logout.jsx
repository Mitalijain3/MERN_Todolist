import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
const Logout = () => {
    const history =useHistory();
useEffect(()=>{
    fetch("/Logout",{
    method:'GET',
    headers:{
        "Content-Type":"application/json"
    },
    credential:"include"})
    .then((res)=>{
        if(res.status!==200){
        history.push('/login',{replace:true});
        }
        history.push('/');
    }).catch((error)=>{
        console.log(error);
    });

});

    return (
        <div>
            
        </div>
    )
}

export default Logout
