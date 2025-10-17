import React from "react";
import "../App.css"; // use your main css file


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Web Design Project",
      desc: "Creative modern website built with React and CSS animations.",
      img: "/src/assets/website-design-16-20241121-8236349.webp",
    },
    {
      id: 2,
      title: "Data Analysis",
      desc: "Cross-platform mobile app designed for user engagement.",
      img: "src/assets/691b838e3ceda49f0612d3fa0fc4a264.jpg",
    },
    {
      id: 3,
      title: "App Development",
      desc: "Minimal, intuitive interface built for SaaS applications.",
      img: "src/assets/pngtree-purple-login-app-ui-image_398418.jpg",
    },
    {
      id: 4,
      title: "Data Dashboard",
      desc: "Responsive data visualization dashboard using Chart.js.",
      img: "src/assets/APCV-361-data-visualization.jpg",
    },
    {
      id: 5,
      title: "Ecommerce Website",
      desc: "Secure website setup with authentication and encryption.",
      img: "src/assets/20322f69-4f8f-4ece-9acb-dd58cae43566-cover.png",
    },
    {
      id: 6,
      title: "Graphics Design Portfolio",
      desc: "A creative showcase of brand identity and logo design.",
      img: "src/assets/16683353_5757453.jpg",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <h1 className="portfolio-title">Our Portfolio</h1>

      <div className="portfolio-grid">
        {projects.map((item) => (
          <div key={item.id} className="portfolio-card">
            <div className="portfolio-img">
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <button className="view-btn">View More</button>
              </div>
            </div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="see-more">
        <button className="see-more-btn">See More</button>
      </div>
    </section>
  );
};

export default Portfolio;
