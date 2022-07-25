import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id : 1,
            name: 'Flouride Treatment',
            description :  "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
            img: fluoride,
        },
        {
            _id : 2,
            name: 'Cavity Filling',
            description :  "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
            img: cavity,
        },
        {
            _id : 1,
            name: 'Teeth Whitening',
            description :  "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities",
            img: whitening,
        },
    ]
    return (
        <div className='my-10'>
             <div className='text-center my-5'>
                <h1 className='text-xl text-primary font-bold'>OUR SERVICES</h1>
                <h2 className='text-4xl text-accent'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map( service => <Service
                    key={service._id}
                    service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;