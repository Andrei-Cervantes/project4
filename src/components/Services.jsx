import React from 'react';
import LineWithHeader from './UI/Line';
import Card from './UI/Card';

export default function Services() {
    return (
        <div>
            <div className='d-flex flex-column flex-md-row'>
                <LineWithHeader header={"services"} width='100px' />
                <p style={{ maxWidth: '740px', marginLeft: '1rem', color: 'whitesmoke', marginBottom: '0'}}>At Acquire-G Printing Supply, we go beyond providing high-quality products. We offer a range of services designed to meet all your printing needs and ensure your operations run smoothly. Our team of experts is dedicated to delivering exceptional service and support, making us your trusted partner in the printing industry.</p>
            </div>
            <div>
                <Card header="Product Consultation" maxWidth="400px" body={<p>Our knowledgeable staff is here to help you find the right products for your specific needs. Whether you're unsure about which ink or toner cartridge is compatible with your printer, or you need advice on the best paper type for a particular project, our experts are ready to assist you. We provide personalized recommendations to ensure you get the best results.</p>} lineWidth='0px' />
                <Card header="Custom Printing Solutions" maxWidth="400px" body={<p>For businesses requiring specialized printing solutions, we offer custom printing services. Whether you need branded stationery, promotional materials, or custom labels, we work with you to create high-quality printed products that meet your specifications. Our team will guide you through the design process, ensuring your vision is brought to life.</p>} lineWidth="0px" />
                <Card header="Product Consultation" maxWidth="400px" body={<p>If you have large-scale printing needs, our bulk ordering service is perfect for you. We offer competitive pricing and special discounts for bulk purchases, ensuring you get the best value for your money. Our streamlined ordering process makes it easy to place large orders and receive them promptly.</p>} lineWidth='0px' />
            </div>
            
        </div>
    )
}