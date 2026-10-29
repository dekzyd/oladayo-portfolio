type SectionLabelProps = {
  number: string;
  label: string;
  className?: string;
};

export default function SectionLabel({
  number,
  label,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}
