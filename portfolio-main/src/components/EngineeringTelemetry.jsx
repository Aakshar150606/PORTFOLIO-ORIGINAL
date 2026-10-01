import { useAudio } from '../hooks/useAudio';

export default function EngineeringTelemetry() {
  const { playHoverSound, playClickSound } = useAudio();
  return (
    <div className="telemetry-command-deck gsap-reveal font-mono">
      <div className="telemetry-header">
        <div className="telemetry-header-left"><span className="telemetry-live-dot" /><span className="telemetry-hud-tag">Current Activity & Profiles</span></div>
        <span className="telemetry-hud-status">CSE Undergraduate • Open to Opportunities</span>
      </div>
      <div className="telemetry-grid">
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top"><span className="card-badge">CURRENT FOCUS</span><span className="card-indicator">Active</span></div>
          <h3 className="telemetry-card-title">Full Stack & AI Systems</h3>
          <p className="telemetry-card-text text-gray">Building responsive interfaces, backend services, database-backed applications and AI-assisted developer workflows.</p>
          <div className="telemetry-meta-row text-gray"><span>CORE STACK:</span><span className="meta-highlight">React, Node.js, Python, Java, MongoDB</span></div>
        </div>
        <div className="telemetry-card hoverable">
          <div className="telemetry-card-top"><span className="card-badge">GITHUB CODE</span><span className="card-indicator">Open Source Profile</span></div>
          <h3 className="telemetry-card-title">Projects & Experiments</h3>
          <p className="telemetry-card-text text-gray">Explore my development work, experiments and learning projects across web development, AI, automation and programming.</p>
          <div className="telemetry-actions-list">
            <a href="https://github.com/Aakshar150606" target="_blank" rel="noopener noreferrer" className="telemetry-btn hoverable" onMouseEnter={playHoverSound} onClick={playClickSound}>
              <span>View GitHub Repositories</span><span className="telemetry-arrow">↗</span>
            </a>
          </div>
        </div>
        <div className="telemetry-card telemetry-card-comms hoverable">
          <div className="telemetry-card-top"><span className="card-badge">PROFESSIONAL PROFILE</span><span className="card-indicator">Open to Internships</span></div>
          <div className="linkedin-profile-preview">
            <div className="linkedin-preview-avatar" style={{ display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: '1.5rem' }}>AK</div>
            <div className="linkedin-preview-info"><div className="linkedin-preview-name"><span>Akshar</span></div><div className="linkedin-preview-role text-gray">CSE Undergraduate • Full Stack Developer</div></div>
          </div>
          <p className="telemetry-card-text text-gray" style={{ marginBottom: '1rem' }}>Interested in full-stack development, AI-assisted engineering, data applications and software internships.</p>
          <div className="telemetry-actions-list">
            <a href="mailto:akkajosyula.akshar@gmail.com" className="telemetry-btn hoverable" onMouseEnter={playHoverSound} onClick={playClickSound}><span>Email Me</span><span className="telemetry-arrow">↗</span></a>
            <a href="tel:+917815914746" className="telemetry-btn telemetry-btn-ping hoverable" onMouseEnter={playHoverSound} onClick={playClickSound}><span>Call Me</span><span className="telemetry-arrow">☎</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}
