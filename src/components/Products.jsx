import React from 'react';
import LineWithHeader from './UI/Line';
import Card from './UI/Card';

// image
import productImage from '../assets/products-img.png';

export default function Products() {
    return (
        <div id='products'>
            <div className='d-flex flex-column flex-md-row'>
                <LineWithHeader header={"products"} width='100px' />
                <p style={{ maxWidth: '740px', marginLeft: '1rem', color: 'whitesmoke', marginBottom: '0'}}>At Acquire-G Printing Supply, we offer a wide range of products to cater to all your printing needs:</p>
            </div>
            <div>
                <div>
                    <Card header="Ink & Toner" maxWidth="264px" body={<p>Our premium ink and toner cartridges are compatible with all major printer brands. We ensure vibrant colors and sharp text with every print, helping you achieve professional-grade results every time.</p>} lineWidth='0px' />
                    <Card header="Paper Products" maxWidth="264px" body={<p>From standard copy paper to specialty photo paper, we have an extensive selection of paper products. Whether you need paper for everyday use or for high-quality printing projects, we've got you covered.</p>} lineWidth='0px' />
                    <Card header="Printers & Scanners" maxWidth="264px" body={<p>Explore our collection of top-performing printers and scanners from leading manufacturers. We offer a variety of models to suit different needs, from home offices to large corporate environments.</p>} lineWidth='0px' />
                    <Card header="Office Supplies" maxWidth="264px" body={<p>In addition to printing supplies, we provide a comprehensive range of office supplies to keep your workspace organized and efficient. From staplers to filing cabinets, you'll find everything you need right here.</p>} lineWidth='0px' />
                </div>
                <Card lineWidth='0px' body={<img style={{ width: "100%"}} src={productImage} />} maxWidth='550px' />
            </div>
        </div>
    )
}