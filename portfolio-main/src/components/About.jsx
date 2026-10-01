import EngineeringTelemetry from './EngineeringTelemetry';
import Timeline from './Timeline';
import MaskedTitle from './MaskedTitle';

export default function About() {
  return (
    <div className="about-page-wrapper">
      <section id="about" className="container about-intro-section">
        <div className="about-grid">
          <div className="gsap-reveal">
            <MaskedTitle number="1." text="About Me" />
            <div className="divider" />
            <p className="text-gray about-text">
              I’m Akshar, a Computer Science undergraduate and aspiring Full Stack Developer from Lendi Institute of Engineering and Technology. I build responsive web applications, database-backed systems and AI-assisted developer tools while continuously improving my programming and problem-solving skills. I enjoy combining JavaScript, React, Node.js, Python, Java, MongoDB and AI agents to turn ideas into working software.
            </p>
            <div className="font-mono text-gray skill-list text-sm">
              <p>• Full Stack Web Development</p>
              <p>• AI Agents & Generative AI Integration</p>
              <p>• REST APIs, MongoDB & Application Logic</p>
              <p>• Data Analysis with Python, Pandas & Matplotlib</p>
            </div>
          </div>

          <div className="abstract-box hoverable gsap-reveal">
            <div className="about-photo-wrapper" style={{ display: 'grid', placeItems: 'center', minHeight: '280px' }}>
              <div className="text-glow" style={{ fontSize: 'clamp(4rem, 9vw, 8rem)', fontWeight: 900, letterSpacing: '0.08em' }}>AK</div>
            </div>
          </div>
        </div>
        <EngineeringTelemetry />
      </section>
      <Timeline />
    </div>
  );
}
