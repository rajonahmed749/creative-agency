import React from 'react';
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";
import TestimonialCard from './TestimonialCard';
import "./Testimonilal.css"

const Testimonial = () => {

    const testimonialData = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Wilson Harry',
            img: wilson,
            position: "Product Manager"
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Ema Gomez',
            img: ema,
            position: "Developer"
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Aliza Farari',
            img: aliza,
            position: "Digital Marketer"
        }
    ]
    return (
        <section className="testimonials my-5 py-5 mt-5">
            <div className="container">
                <div className="section-header">
                    <h6 className="text-success text-uppercase">Testimonial</h6>
                    <h1>What Our Customer <br /> Says About Us</h1>
                </div>
                <div className="card-deck mt-5 row d-flex">
                    {
                        testimonialData.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;