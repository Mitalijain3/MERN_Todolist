import React from 'react'
import { Link } from "react-router-dom";
export const Errorpage = () => {
    return (
        <div id='notfound'>
        <div className='notfound'>
            <div className='notfound-404'>
                <h1 >404</h1>
             </div>
             <h2>Page not found</h2>
             <Link to="/" className="errorButton">Back To Home page</Link>
            </div>   
        </div>
    )
}
export default Errorpage;