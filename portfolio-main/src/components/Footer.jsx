import useTextScramble from '../hooks/useTextScramble';
function ScrambleLink({ href, children, className, ...props }) {
  const { displayText, onMouseEnter, onMouseLeave } = useTextScramble(children);
  return <a href={href} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} {...props}>{displayText}</a>;
}
export default function Footer() {
  return <footer><div className="container footer-inner font-mono text-gray">
    <p>© 2026 BUILD WITH AKSHAR. All systems operational.</p>
    <div className="social-links uppercase">
      <ScrambleLink href="https://github.com/Aakshar150606" className="hoverable" target="_blank" rel="noopener noreferrer">Github</ScrambleLink>
      <ScrambleLink href="mailto:akkajosyula.akshar@gmail.com" className="hoverable">Email</ScrambleLink>
    </div>
  </div></footer>;
}
