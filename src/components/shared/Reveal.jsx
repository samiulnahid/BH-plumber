import useReveal from "../../hooks/useReveal.js";

export default function Reveal({ children, className = "" }) {
  const ref = useReveal();
  return (
    <div className={`reveal ${className}`} ref={ref}>
      {children}
    </div>
  );
}
