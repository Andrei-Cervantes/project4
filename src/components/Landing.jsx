import React from 'react';

// images
import acquire from '../assets/Landing/ACQUIRE-G.png';
import printing from '../assets/Landing/PRINTING-SUPPLY.png';
import Card from './UI/Card';

export default function Landing() {
    return (
        <div id='landing' className='mx-3 d-flex flex-column justify-content-center align-items-center gap-5 flex-md-row' style={{ marginTop: '27rem'}}>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img className='w-100' src={acquire} />
                <img className='w-100' src={printing} />
            </div>
            <Card lineWidth='0px' body={<p>Welcome to Acquire-G Printing Supply, your trusted partner in providing high-quality printing supplies. Our mission is to empower businesses and individuals with top-notch products that ensure excellent printing results. With years of industry experience, we understand the nuances of printing and are committed to delivering exceptional customer service and unbeatable value.</p>} maxWidth='550px' />
        </div>
    )
}