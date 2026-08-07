export default function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`px-6 md:px-12 lg:px-24 ${className}`}>
      {children}
    </section>
  );
}
