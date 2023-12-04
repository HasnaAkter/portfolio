// Testimonials.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../assets/pp.jpg';
import img2 from '../../assets/work4.jpg';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'SM Hena',
      title: 'CEO of Henaz Group',
      text: 'Another testimonial text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...',
      image: img1,
    },
    {
      id: 2,
      name: 'Another Person',
      title: 'Another Title',
      text: 'Another testimonial text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...',
      image: img1,
    },
    {
      id: 3,
      name: 'SM Hena',
      title: 'CEO of Henaz Group',
      text: 'Another testimonial text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...',
      image: img1,
    },
    {
      id: 4,
      name: 'Another Person',
      title: 'Another Title',
      text: 'Another testimonial text goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...',
      image: img1,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="max-w-screen-lg mx-auto p-10">

<h3 className="font-bold text-4xl   py-3 capitalize text-center">My Clients Review</h3>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card-container py-3 ">
            <div className="card bg-base-100 shadow-xl md:flex my-10 p-10">
              {/* <figure className="md:w-1/3">
                <img
                  src={testimonial.image}
                  alt={`Testimonial ${testimonial.id}`}
                  className="object-cover w-full h-full"
                />
              </figure> */}
              <div className="card-body md:w-2/3 p-6">
                <h2 className="card-title font-bold text-4xl md:text-5xl text-pink-900">“</h2>
                <p className="text-base md:text-lg">{testimonial.text}</p>
                <br />
                <p className="font-bold text-lg md:text-xl text-pink-900">{testimonial.name}</p>
                <p>{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
