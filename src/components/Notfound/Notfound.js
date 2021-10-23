import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound/404.png'
import './Notfound.css'

const Notfound = () => {
    return (
        <div  className="error" >
     <h1> 404 <p> error page not found!</p></h1>
            <div>
            <Link to ="/"><button className="not-btn">Go Back</button></Link>
            </div>
        </div>
    );
};

export default Notfound;