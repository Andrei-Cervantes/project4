import React from 'react';

// logo
import logo from '../assets/logo.png';

export default function MainNavbar() {
    return (
        <div className='text-center'>
            <div className='mx-5 py-3 d-flex flex-column flex-md-row justify-content-evenly align-items-center gap-3'>
                <img src={logo} />
                <div className='text-white p-3 rounded-4' style={{ backgroundColor: "rgba(255, 255, 255, 0.11)", border: "1px solid rgba(255, 255, 255, 0.25)", backdropFilter: 'blur(60px)'}}>
                    <ul className='p-0 m-0 d-flex flex-column flex-md-row gap-5' style={{ listStyleType: 'none'}}>
                        <li><a style={{ color: 'whitesmoke', textDecoration: 'none'}} href='#'>HOME</a></li>
                        <li><a style={{ color: 'whitesmoke', textDecoration: 'none'}} href='#aboutus'>ABOUT US</a></li>
                        <li><a style={{ color: 'whitesmoke', textDecoration: 'none'}} href='#products'>PRODUCTS</a></li>
                        <li><a style={{ color: 'whitesmoke', textDecoration: 'none'}} href='#services'>SERVICES</a></li>
                    </ul>
                </div>
                <button className='text-white p-3 rounded-4' style={{ backgroundColor: "rgba(255, 255, 255, 0.11)", border: "1px solid rgba(255, 255, 255, 0.25)", backdropFilter: 'blur(60px)'}}>Contact Us</button>
            </div>
            
        </div>
    )
}