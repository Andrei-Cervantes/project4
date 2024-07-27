import React from 'react';
import LineWithHeader from './UI/Line';
import Card from './UI/Card';

// Icons
import innovation from '../assets/AboutUsIcons/innovation-icon.png';
import integrity from '../assets/AboutUsIcons/integrity-icon.png';
import quality from '../assets/AboutUsIcons/quality-icon.png';
import customer from '../assets/AboutUsIcons/support-img.png';

export default function AboutUs() {
    return (
        <div id='aboutus' className='my-5 mx-2 d-flex flex-column justify-content-center align-items-center gap-3 flex-md-row'>
            <div>
                <LineWithHeader header={"about us"} />
                <div className='d-flex flex-column justify-content-center align-items-center gap-3 flex-md-row'>
                    <Card header="MISSION" body={<p>At Acquire-G Printing Supply, our mission is simple: to empower our customers with the best printing supplies available. We strive to be your go-to source for all your printing needs, ensuring that every product we offer meets the highest standards of quality and performance.</p>} maxWidth="360px" />
                    <Card header="VISION" body={<p>We envision a world where businesses and individuals can achieve their printing goals with ease and confidence. By continuously innovating and expanding our product range, we aim to support the evolving needs of our customers and stay at the forefront of the printing supply industry.</p>} maxWidth="360px" />
                </div>
            </div>
            <Card header="VALUES" maxWidth="360px" body={
                <div className='py-3 px-2'>
                    <div className='d-flex flex-row justify-content-around'>
                        <div className='d-flex flex-column'>
                            <img src={quality} style={{ width: "72px", height: "72px"}} />
                            <p className='text-center'>Quality</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <img src={quality} style={{ width: "72px", height: "72px"}} />
                            <p className='text-center'>Quality</p>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-around'>
                        <div className='d-flex flex-column'>
                            <img src={quality} style={{ width: "72px", height: "72px"}} />
                            <p className='text-center'>Quality</p>
                        </div>
                        <div className='d-flex flex-column'>
                            <img src={quality} style={{ width: "72px", height: "72px"}} />
                            <p className='text-center'>Quality</p>
                        </div>
                    </div>
                </div>  
            } />
        </div>
    )
}