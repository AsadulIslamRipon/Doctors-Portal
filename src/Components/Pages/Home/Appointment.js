import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <div
        style={{
            background: `url(${appointment})`
        }}
         className='flex justify-center items-center my-40 rounded-xl'>
            <div className='flex-1'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='font-bold text-primary text-xl my-6'>Appointment</h3>
                <h1 className='text-4xl font-semibold text-white'>Make an appointment Today</h1>
                <p className='my-6 text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default Appointment;