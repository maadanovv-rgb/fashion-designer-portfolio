export function SectionTitle({
  kicker,
  title,
  right,
}: {
  kicker?: string;
  title: string;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        {kicker ? (
          <div className="text-xs tracking-[0.22em] uppercase text-muted-foreground">{kicker}</div>
        ) : null}
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {right ? <div className="mt-2 md:mt-0">{right}</div> : null}
    </div>
  );
}
