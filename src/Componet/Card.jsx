import React from "react";
import { Code, Smartphone, Palette, Database, Shield, Image } from "lucide-react";
import "../App.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="course-section" id="courses">
      <h1 className="course-title">Our Courses</h1>
      <div className="course-grid">
        <div className="course-card">
          <Code className="icon blue" />
          <h2>Web Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quo ab qui nisi.</p>
        </div>

        <div className="course-card">
          <Smartphone className="icon green" />
          <h2>Mobile App Development</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quo ab qui nisi.</p>
        </div>

        <div className="course-card">
          <Palette className="icon pink" />
          <h2>UI/UX Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quo ab qui nisi.</p>
        </div>

        <div className="course-card">
          <Database className="icon orange" />
          <h2>Data Analysis</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quo ab qui nisi.</p>
        </div>

        <div className="course-card">
          <Shield className="icon purple" />
          <h2>Cyber Security</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quo ab qui nisi.</p>
        </div>

        <div className="course-card">
          <Image className="icon red" />
          <h2>Graphics Design</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quo ab qui nisi.</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
