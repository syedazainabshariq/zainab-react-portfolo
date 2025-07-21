import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h2 className="section-heading">About Me</h2>
      <p className="intro-text">
        I’m Zainab — a passionate frontend developer who builds modern, responsive,
        and animated web experiences. Currently balancing my O-Levels with real-world dev projects.
      </p>

      <div className="skills-section">
        <h3 className="section-heading">My Core Skills</h3>
        <div className="skills-grid">
          <div className="skill-card">React.js</div>
          <div className="skill-card">Next.js</div>
          <div className="skill-card">HTML / CSS / JavaScript</div>
          <div className="skill-card">TypeScript</div>
          <div className="skill-card">Git & GitHub</div>
        </div>
      </div>

      <div className="fun-facts">
        <h3>Some Fun Facts About Me</h3>
        <div className="facts-grid">
          <div className="fact-card">
            <strong>Favorite tech/framework?</strong>
            <p>I like you know those 3 PCs that are connected to each other — they look cool.</p>
          </div>
          <div className="fact-card">
            <strong>Dream job/company?</strong>
            <p>tbh my dream is to open a software house and be the CEO there.</p>
          </div>
          <div className="fact-card">
            <strong>Coffee or Tea?</strong>
            <p>Coffee obvs.</p>
          </div>
          <div className="fact-card">
            <strong>Favorite project you've made so far?</strong>
            <p>This portfolio — it was super fun and I added everything I knew about coding.</p>
          </div>
          <div className="fact-card">
            <strong>A fun fact not many know about you?</strong>
            <p>I love reading Novels, and Manga/Manhwa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
