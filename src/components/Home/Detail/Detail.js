import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Detail.css'

const Detail = () => {
    const{serviceId} = useParams();
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/service.json')
        .then(res => res.json())
        .then(data => {
            const findService = data.find(service =>service.id.toString()===serviceId)
            setServices(findService)
        })
    },[])
    
    const{name,id, description, img} = services;
    return (
       
           <div className="service container">
            <img className=" service" width="500px" src={img} alt="" />
           <h3 className="name py-4">{name}</h3> 
           <p className=" description px-4">{description?.slice(0,80)}</p>
          <Link to={`/detail/${id}`}>
           <button className="btn-regular text-light">Enquire Now</button>
           </Link>
      
        </div>
    );
};

export default Detail;