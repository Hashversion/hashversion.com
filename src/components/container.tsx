export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[900px] md:px-2">{children}</div>;
}
