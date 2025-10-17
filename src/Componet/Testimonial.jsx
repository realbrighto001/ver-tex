import React, { useState } from "react";
import "../App.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Web Developer",
    image: "https://i.pravatar.cc/120?img=5",
    text: "Vertex Digital completely transformed my business website! Their team is professional and highly skilled.",
  },
  {
    name: "Michael Ade",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/120?img=8",
    text: "I learned web design here, and now I work remotely with international clients. Highly recommend their courses!",
  },
  {
    name: "Grace Olamide",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/120?img=12",
    text: "The customer service and project quality are top-notch. I’m beyond impressed with their dedication.",
  },
  {
    name: "David Smith",
    role: "Mobile App Developer",
    image: "https://i.pravatar.cc/120?img=20",
    text: "Their mobile app training is one of the best I’ve seen. Practical, engaging, and beginner-friendly!",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="testimonial-section">
      <h1 className="testimonial-title">What Our Clients Say</h1>

      <div className="testimonial-card">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
        />
        <p className="testimonial-text">
          “{testimonials[currentIndex].text}”
        </p>
        <h3>{testimonials[currentIndex].name}</h3>
        <span>{testimonials[currentIndex].role}</span>

        <div className="testimonial-buttons">
          <button onClick={prevTestimonial}>&lt;</button>
          <button onClick={nextTestimonial}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
