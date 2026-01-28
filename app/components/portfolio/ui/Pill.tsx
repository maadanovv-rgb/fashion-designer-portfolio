export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[#D6DDC8] bg-[#FBFCF8] px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
