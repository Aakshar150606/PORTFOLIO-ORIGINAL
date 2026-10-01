import { useMemo, useState } from 'react';
import ProjectModal from './ProjectModal';
import MaskedTitle from './MaskedTitle';

import jarvis from '../assets/project-jarvis.svg';
import slatePencil from '../assets/project-slate-pencil.svg';
import debuggerImg from '../assets/project-debugger.svg';
import quizhub from '../assets/project-quizhub.svg';

export default function Work() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const projects = useMemo(() => [
    {
      bgClass: 'bg-3', shortTitle: 'Jarvis / Mark', category: 'AI ASSISTANT • AUTOMATION • PYTHON',
      tagline: 'Personal AI Desktop Assistant',
      description: 'A desktop-oriented personal AI assistant designed to combine conversational AI with practical computer-control and developer tools. The system is modular so new tools and workflows can be added without rebuilding the core assistant.',
      problem: 'Developers often switch between applications, browser tools, system controls, and coding utilities during a single workflow.',
      solution: 'Built a modular assistant architecture with voice interaction, AI reasoning, tool calling, desktop automation, browser control, file operations, reminders, web search, and coding assistance.',
      techStack: ['Python', 'Gemini API', 'AI Agents', 'Voice AI', 'Automation'],
      features: ['Voice-based interaction', 'Tool-based AI agents', 'Desktop & browser control', 'Developer assistance'],
      architectureFlow: [
        { step: '01', title: 'Voice Input', tech: 'Audio • Speech', desc: 'Captures natural-language commands from the user.' },
        { step: '02', title: 'AI Core', tech: 'Gemini • Prompts', desc: 'Interprets intent and selects the appropriate tool.' },
        { step: '03', title: 'Tool Layer', tech: 'Python • Agents', desc: 'Runs browser, desktop, file, web and developer actions.' },
        { step: '04', title: 'Response', tech: 'Voice • UI', desc: 'Returns the result through the assistant interface.' }
      ],
      architectureDetails: [
        { title: 'Modular Tools', desc: 'Features are separated into reusable tools so the assistant can grow over time.' },
        { title: 'Prompt Control', desc: 'System prompts define the assistant personality, behavior and tool-use rules.' },
        { title: 'Developer Workflow', desc: 'Includes coding, file and browser utilities alongside everyday computer actions.' }
      ],
      metrics: [
        { label: 'Primary Language', value: 'Python' },
        { label: 'AI Model', value: 'Gemini' },
        { label: 'Focus', value: 'AI Agents' },
        { label: 'Interface', value: 'Desktop' }
      ],
      title: 'Jarvis / Mark', images: [jarvis]
    },
    {
      bgClass: 'bg-1', shortTitle: 'Slate Pencil', category: 'EDTECH • LEARNING • WEB PLATFORM',
      tagline: 'Learning Through Play',
      description: 'An educational platform concept that makes learning more engaging through playful interactions, accessible content, and structured activities.',
      problem: 'Learners can lose interest when educational content feels disconnected from interaction, exploration, and visible progress.',
      solution: 'Designed a responsive learning experience that combines clear educational content with game-inspired activities and an approachable interface.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Interactive UI', 'Education'],
      features: ['Play-based learning flow', 'Interactive activities', 'Accessible content structure', 'Responsive web UI'],
      architectureFlow: [
        { step: '01', title: 'Learning Hub', tech: 'Web UI', desc: 'Organises activities and educational content into a clear starting point.' },
        { step: '02', title: 'Activity Layer', tech: 'Interactive UI', desc: 'Turns lessons into approachable, hands-on learning moments.' },
        { step: '03', title: 'Progress Layer', tech: 'State • Feedback', desc: 'Connects activity completion with visible learner feedback.' },
        { step: '04', title: 'Content System', tech: 'Data • Modules', desc: 'Keeps learning material structured and ready to expand.' }
      ],
      architectureDetails: [
        { title: 'Playful UX', desc: 'Uses interaction and discovery to make educational content feel inviting.' },
        { title: 'Clear Structure', desc: 'Breaks learning into focused activities that are easy to navigate.' },
        { title: 'Scalable Content', desc: 'The modular approach supports new subjects, activities, and learning paths.' }
      ],
      metrics: [
        { label: 'Domain', value: 'Education' },
        { label: 'Platform', value: 'Web' },
        { label: 'Focus', value: 'Learning Through Play' },
        { label: 'Type', value: 'Interactive Platform' }
      ],
      title: 'Slate Pencil', images: [slatePencil]
    },
    {
      bgClass: 'bg-2', shortTitle: 'AI Debugger', category: 'DEVELOPER TOOL • AI • NODE.JS',
      tagline: 'AI-Assisted Developer Productivity Tool',
      description: 'A desktop-style developer tool concept that combines code editing, debugging workflows, and AI assistance in a focused interface.',
      problem: 'Developers frequently move between code editors, terminals, documentation, and AI tools while diagnosing bugs.',
      solution: 'Created an integrated interface using CodeMirror, Node.js and Express.js, with an AI-oriented workflow for understanding and resolving code issues.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'CodeMirror', 'Three.js'],
      features: ['Code editing', 'AI debugging workflow', 'Developer-focused UI', 'Interactive visual design'],
      architectureFlow: [
        { step: '01', title: 'Code Editor', tech: 'CodeMirror', desc: 'Provides a focused environment for editing source code.' },
        { step: '02', title: 'Application Layer', tech: 'Node.js • Express', desc: 'Coordinates requests and developer workflows.' },
        { step: '03', title: 'AI Assistance', tech: 'LLM Integration', desc: 'Supports explanation, debugging and code improvement.' },
        { step: '04', title: 'Visual Layer', tech: 'Three.js', desc: 'Adds an interactive developer-oriented interface.' }
      ],
      architectureDetails: [
        { title: 'Integrated Workflow', desc: 'Keeps coding and AI assistance inside one developer-oriented experience.' },
        { title: 'Readable Code UX', desc: 'Uses CodeMirror to make source-code interaction central to the application.' },
        { title: 'Extensible Backend', desc: 'Node.js and Express provide a foundation for additional APIs and tools.' }
      ],
      metrics: [
        { label: 'Editor', value: 'CodeMirror' },
        { label: 'Backend', value: 'Node.js' },
        { label: 'API Layer', value: 'Express.js' },
        { label: 'Visuals', value: 'Three.js' }
      ],
      title: 'AI Debugger', images: [debuggerImg]
    },
    {
      bgClass: 'bg-3', shortTitle: 'CodeQuizHub', category: 'FULL STACK • JAVA • MONGODB',
      tagline: 'Coding Quiz & Learning Platform',
      description: 'A full-stack coding quiz platform concept for presenting programming questions, managing quiz data, and creating an interactive learning experience.',
      problem: 'Students need simple, structured ways to practise programming concepts and track their learning activities.',
      solution: 'Designed a web application backed by MongoDB with Java-based application logic and a frontend for interactive quiz experiences.',
      techStack: ['Java', 'MongoDB', 'HTML', 'CSS', 'JavaScript'],
      features: ['Quiz interface', 'Question management', 'Database-backed content', 'Interactive learning flow'],
      architectureFlow: [
        { step: '01', title: 'Frontend', tech: 'HTML • CSS • JS', desc: 'Presents questions and captures user interactions.' },
        { step: '02', title: 'Application Logic', tech: 'Java', desc: 'Handles quiz and application behaviour.' },
        { step: '03', title: 'Data Layer', tech: 'MongoDB', desc: 'Stores structured quiz and application data.' },
        { step: '04', title: 'Learning Flow', tech: 'Results • UI', desc: 'Connects questions, answers and user feedback.' }
      ],
      architectureDetails: [
        { title: 'Database Driven', desc: 'Quiz content is organised for persistent storage and retrieval.' },
        { title: 'Interactive Learning', desc: 'The interface is built around quick question-and-answer interactions.' },
        { title: 'Maintainable Structure', desc: 'Separates frontend, application logic and data responsibilities.' }
      ],
      metrics: [
        { label: 'Language', value: 'Java' },
        { label: 'Database', value: 'MongoDB' },
        { label: 'Domain', value: 'Education' },
        { label: 'Type', value: 'Full Stack' }
      ],
      title: 'CodeQuizHub', images: [quizhub], video: '/video%20for%20portfolio.mp4'
    }
  ], []);

  const activeProject = activeProjectIndex === null ? null : projects[activeProjectIndex];

  return (
    <section id="work" className="container work-page-section">
      <div className="gsap-reveal work-header">
        <MaskedTitle number="2." text="Featured Work" />
        <div className="divider" />
      </div>
      <div className="work-grid">
        {projects.map((proj, index) => (
          <div key={proj.title} className="project-card hoverable gsap-work-card" role="button" tabIndex={0}
            onClick={() => setActiveProjectIndex(index)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveProjectIndex(index); }}
            aria-label={`Open project: ${proj.title}`}>
            <div className={`project-bg ${proj.bgClass}`} />
            <div className="project-overlay" />
            <div className="project-info">
              <p className="font-mono project-category text-gray uppercase">{proj.category}</p>
              <h3 className="project-title text-glow uppercase">{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal open={activeProjectIndex !== null} onClose={() => setActiveProjectIndex(null)} project={activeProject} />
    </section>
  );
}
