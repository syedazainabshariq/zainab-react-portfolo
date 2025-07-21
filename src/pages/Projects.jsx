import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="project-card">
          <h3>Khareedgar</h3>
          <p>
            A Next.js based website which is an ecommerce site for Grocery
            Shoppings with animations and modern layout.
          </p>
        </div>

        <div className="project-card">
          <h3>Chicken Store</h3>
          <p>E-commerce site for fresh poultry, built with Next.js.</p>
        </div>

        <div className="project-card">
          <h3>Cyber Attack Simulator</h3>
          <p>Terminal-style dashboard with Matrix rain animation.</p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="projects-cta">
        <h2>Feeling Inspired?</h2>
        <p>Wanna explore more of my code, experiments & passion projects?</p>
        <a
          href="https://github.com/syedazainabshariq"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          Visit My GitHub ↗
        </a>
      </div>
    </section>
  );
}

export default Projects;
