import { useState, useEffect, useRef, useCallback } from 'react';
import { useAudio } from '../hooks/useAudio';
import {
  WebArchitectureCanvas,
  ChatUpSocketStreamCanvas,
  RoastingAITokenStreamCanvas,
  EdgeResumeATSParserCanvas
} from './TimelineVisualizers';
import MaskedTitle from './MaskedTitle';

export default function Timeline() {
  const { playHoverSound, playClickSound } = useAudio();
  const [activeEpochIndex, setActiveEpochIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const epochs = [
    { epoch: '01', date: '2025 – 2026', stageLabel: 'STAGE 01', category: 'FOUNDATIONS', dockLabel: 'FOUNDATIONS', title: 'Programming & Web Foundations', headline: 'C, C++, Java, Python & Web Development', summary: 'Built a foundation in programming, data structures, HTML, CSS and JavaScript while developing problem-solving skills through coursework and coding practice.', metrics: [{ label: 'Focus', value: 'Programming' }, { label: 'Web', value: 'HTML + CSS + JS' }, { label: 'Languages', value: 'C / C++ / Java / Python' }], techStack: ['C', 'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript'], Visualizer: WebArchitectureCanvas },
    { epoch: '02', date: '2026', stageLabel: 'STAGE 02', category: 'FULL STACK', dockLabel: 'FULL STACK', title: 'Web Applications & Databases', headline: 'React, Node.js, Express.js & MongoDB', summary: 'Moved from frontend fundamentals into full-stack application development, learning how interfaces, APIs, server logic and databases work together.', metrics: [{ label: 'Frontend', value: 'React.js' }, { label: 'Backend', value: 'Node.js + Express' }, { label: 'Database', value: 'MongoDB' }], techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'], Visualizer: ChatUpSocketStreamCanvas },
    { epoch: '03', date: '2026', stageLabel: 'STAGE 03', category: 'AI ENGINEERING', dockLabel: 'AI SYSTEMS', title: 'AI Agents & Developer Tools', headline: 'Generative AI, Automation & Personal AI', summary: 'Started building AI-powered applications and personal developer tools, connecting language models with browser, desktop, file and coding workflows.', metrics: [{ label: 'Focus', value: 'AI Agents' }, { label: 'Model', value: 'Gemini' }, { label: 'Automation', value: 'n8n + Python' }], techStack: ['Python', 'Gemini API', 'AI Agents', 'n8n', 'Automation'], Visualizer: RoastingAITokenStreamCanvas },
    { epoch: '04', date: '2026', stageLabel: 'STAGE 04', category: 'DATA & PROFESSIONAL', dockLabel: 'DATA + CAREER', title: 'Data Analytics & Professional Experience', headline: 'Python Analytics, SQL & Industry Exposure', summary: 'Expanded into data analysis during a Bluestock internship, working with Python, SQL, Excel/Sheets and financial-market concepts while continuing full-stack development.', metrics: [{ label: 'Role', value: 'Data Analyst Intern' }, { label: 'Tools', value: 'Python + SQL' }, { label: 'Reporting', value: 'Excel / Sheets' }], techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Excel'], Visualizer: EdgeResumeATSParserCanvas }
  ];

  // Auto-running loop across 4 stages (pauses on hover so user can read)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, epochs.length]);

  // Move button controls (loops infinitely in both directions)
  const handleNext = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev + 1) % epochs.length);
  }, [epochs.length, playClickSound]);

  const handlePrev = useCallback(() => {
    playClickSound();
    setActiveEpochIndex((prev) => (prev - 1 + epochs.length) % epochs.length);
  }, [epochs.length, playClickSound]);

  const goToEpoch = useCallback((targetIndex) => {
    if (targetIndex < 0 || targetIndex >= epochs.length) return;
    playClickSound();
    setActiveEpochIndex(targetIndex);
  }, [epochs.length, playClickSound]);

  // Keyboard Arrow navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <section className="container timeline-section" id="experience">
      {/* Aligned Section Header matching #about, #work, #skills */}
      <div className="timeline-header">
        <div className="gsap-reveal">
          <MaskedTitle text="Engineering Journey" />
          <div className="divider" />
        </div>
        <div className="timeline-header-meta font-mono">
          <div className="timeline-meta-pill">
            <span className={`meta-pulse-dot ${isPaused ? 'is-paused' : ''}`} />
            <span className="meta-pill-text">
              STAGE 0{activeEpochIndex + 1}/04 • {isPaused ? 'INTERACTIVE' : 'AUTO-RUNNING'}
            </span>
          </div>
          <div className="timeline-jump-strip">
            {epochs.map((ep, i) => (
              <button
                key={ep.epoch}
                type="button"
                onClick={() => goToEpoch(i)}
                onMouseEnter={playHoverSound}
                className={`timeline-jump-pill hoverable ${activeEpochIndex === i ? 'is-active' : ''}`}
                aria-label={`Jump to stage 0${i + 1}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Stage Slider with Side Navigation Arrows & Auto-running Loop */}
      <div
        className="timeline-stage-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-prev hoverable font-mono"
          onClick={handlePrev}
          onMouseEnter={playHoverSound}
          aria-label="Previous phase"
          title="Previous stage"
        >
          ‹
        </button>

        <div className="timeline-carousel-shell">
          <div
            className="timeline-cards-track"
            style={{ transform: `translateX(-${activeEpochIndex * 100}%)` }}
          >
            {epochs.map((item, idx) => {
              const Visualizer = item.Visualizer;
              const isActive = activeEpochIndex === idx;

              return (
                <div
                  key={item.epoch}
                  className={`timeline-card-slide ${isActive ? 'is-active' : ''}`}
                  onMouseEnter={() => {
                    if (!isActive) playHoverSound();
                  }}
                >
                  {/* Stage Container Card */}
                  <div className="timeline-stage-card hoverable">
                    {/* Left Pane: Narrative & Technical Telemetry */}
                    <div className="timeline-narrative-pane">
                      <div className="stage-topbar font-mono">
                        <div className="stage-topbar-left">
                          <span className="stage-badge uppercase">{item.category}</span>
                          <span className="stage-date uppercase">{item.date}</span>
                        </div>
                        <span className="stage-step-tag text-gray">{item.stageLabel}</span>
                      </div>

                      <div className="stage-title-wrap">
                        <h3 className="stage-title uppercase text-glow">{item.title}</h3>
                        <div className="stage-headline font-mono text-gray uppercase">{item.headline}</div>
                      </div>

                      <p className="stage-summary text-gray">{item.summary}</p>

                      {/* Telemetry Metrics Grid */}
                      <div className="stage-metrics-grid font-mono">
                        {item.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="stage-metric-box">
                            <span className="metric-lbl text-gray">{m.label}</span>
                            <span className="metric-val">{m.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills matching .skill-pill */}
                      <div className="stage-tech-pills font-mono">
                        {item.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="stage-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Pane: 2D Live Visualizer Canvas */}
                    <div className="timeline-simulation-pane">
                      <div className="terminal-canvas-wrapper">
                        <Visualizer isActive={isActive} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          className="timeline-side-arrow timeline-arrow-next hoverable font-mono"
          onClick={handleNext}
          onMouseEnter={playHoverSound}
          aria-label="Next phase"
          title="Next stage"
        >
          ›
        </button>
      </div>
    </section>
  );
}
