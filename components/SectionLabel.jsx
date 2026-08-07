export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
