import React, { useEffect, useRef, useState } from "react";
import "../styles/Home.css";

const floatingWords = [
  { word: "Front-end", bold: true },
  { word: "Backend", bold: true },
  { word: "UI/UX", bold: true },
  { word: "React" },
  { word: "Next.js" },
  { word: "JavaScript" },
  { word: "HTML" },
  { word: "CSS" },
  { word: "Python" },
  { word: "Design" },
  { word: "TypeScript" },
  { word: "Portfolio" },
];

function Home() {
  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => heroRef.current && observer.unobserve(heroRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsTimelineVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => timelineRef.current && observer.unobserve(timelineRef.current);
  }, []);

  return (
    <>
     {/* Hero Section */}
<section className={`hero-section ${isHeroVisible ? "visible" : ""}`} ref={heroRef}>
  <div className="floating-words-container">
    {floatingWords.map((item, index) => (
      <span
        key={index}
        className={`floating-word ${item.bold ? "bold" : ""}`}
        style={{
          animationDelay: `${index * 0.3}s`,
          animationDuration: `${6 + Math.random() * 5}s`,
        }}
      >
        {item.word}
      </span>
    ))}
  </div>

  <div className="text-side">
    <div className="intro-text">
      <h1 className="intro-title">Hi, I'm Zainab</h1>
      <p>Chasing dreams & building web magic ✨</p>
      <a
        href="https://www.canva.com/design/DAGPllK_Zp4/PdAFETw88ojnxybPt_7fSg/view?utm_content=DAGPllK_Zp4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h7565b613f6"
        className="hire-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hire Me
      </a>
    </div>
  </div>

  <div className="blob-container">
    <div className="blob"></div>
    <img src="./assets/profile.png" alt="Profile image of Zainab" className="profile-img" />
  </div>
</section>


      {/* Timeline Section */}
      <section className={`story-timeline ${isTimelineVisible ? "visible" : ""}`} ref={timelineRef}>
        <h2 className="timeline-heading">My Journey as a Dream Chaser</h2>
        <div className={`timeline ${isTimelineVisible ? "visible" : ""}`}>
          <div className="chapter">
            <div className="circle">1</div>
            <div className="line"></div>
            <div className="chapter-box">
              <h3>Chapter 1: The Spark</h3>
              <p className="description">Discovered my love for design and the web.</p>
            </div>
          </div>

          <div className="chapter">
            <div className="circle">2</div>
            <div className="line"></div>
            <div className="chapter-box">
              <h3>Chapter 2: The Learning Phase</h3>
              <p className="description">Started learning HTML, CSS, JavaScript, and React.</p>
            </div>
          </div>

          <div className="chapter">
            <div className="circle">3</div>
            <div className="line"></div>
            <div className="chapter-box">
              <h3>Chapter 3: The Projects</h3>
              <p className="description">Built real-world projects and polished my skills.</p>
            </div>
          </div>

          <div className="chapter">
            <div className="circle">4</div>
            <div className="line"></div>
            <div className="chapter-box">
              <h3>Chapter 4: Facing Challenges</h3>
              <p className="description">Struggled with bugs, burnout, and breakthroughs.</p>
            </div>
          </div>

          <div className="chapter">
            <div className="circle">5</div>
            <div className="line"></div>
            <div className="chapter-box">
              <h3>Chapter 5: The Breakthrough</h3>
              <p className="description">Landed real opportunities and internships.</p>
            </div>
          </div>

          <div className="chapter">
            <div className="circle">6</div>
            <div className="line"></div>
            <div className="chapter-box">
              <h3>Chapter 6: Dream Chasing Mode</h3>
              <p className="description">Still chasing dreams — stronger, smarter, bolder 💫</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
