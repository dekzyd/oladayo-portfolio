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
    <div className={className}>
      <span>{number}</span>
      <span>{label}</span>
    </div>
  );
}
