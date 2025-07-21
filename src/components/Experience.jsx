import React from "react";
import "../styles/Experience.css";

const experienceData = [
  {
    year: "2023",
    title: "Started Learning Web Development",
    description: "Began learning HTML, CSS, and JavaScript through online courses.",
  },
  {
    year: "2025",
    title: "3 month Internship",
    description: "Worked on real-world React projects and improved frontend skills.",
  },
  {
    year: "2025",
    title: "Built Personal Portfolio",
    description: "Launched a fully responsive portfolio with animations and projects.",
  },
];

function Experience() {
  return (
    <section className="experience-section">
      <h2 className="experience-heading">Experience Timeline</h2>
      <div className="timeline-container">
        {experienceData.map((item, index) => (
          <div
            key={index}
            className={`timeline-box ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <span className="year">{item.year}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        <div className="vertical-line" />
      </div>
    </section>
  );
}

export default Experience;
