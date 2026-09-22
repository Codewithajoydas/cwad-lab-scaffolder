type StatusCardProps = {
  title: string;
  value: string;
};

export function StatusCard({ title, value }: StatusCardProps) {
  return (
    <article className="status-card">
      <span>{title}</span>
      <strong>{value}</strong>
    </article>
  );
}