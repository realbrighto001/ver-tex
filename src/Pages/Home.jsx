import React from "react";
import Hero from "../Componet/Hero";
import Card from "../Componet/Card";
import Portfolio from "../Componet/Portfolio";
import Testimonial from "../Componet/Testimonial";
import Contact from "../Componet/Contact";
import { Routes, Route} from 'react-router-dom'

const Home = () => {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Hero />}></Route>
      <Route path="'/card'" element={<Card />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
       <Route path="/testimonial" element={<Testimonial />}></Route>
        <Route path="/Contactus" element={<Contact />}></Route>
       
     </Routes>
    </div>
  );
};

export default Home;
