import React, { useEffect, useState } from 'react';
import Specialist from '../Specialist/specialist';
import './specialists.css'


const Specialists = () => {
    const [specialists, setSpecialists] = useState([]);
    useEffect(() =>{
        fetch('/specialist.json')
        .then(res => res.json())
        .then(data => setSpecialists(data))
    }, [])
 
    return (
        <div id="specialist">
            <h2 className="text-primary py-4 my-4">Our Specialists</h2>
        <div className="specialist container">
        {
                specialists.map(specialist => <Specialist
                key = {specialist.id}
                specialist={specialist}
                ></Specialist>)
            }
        </div>
        </div>
    );
};

export default Specialists;