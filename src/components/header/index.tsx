import Container from "@/components/container";
import HashversionCard from "@/components/header/hashversion-card";

export default function Header() {
  return (
    <header className="h-fit py-8">
      <Container>
        <div className="relative flex h-[180px] items-center justify-center gap-3">
          <HashversionCard className="absolute rotate-11" />
          <h1 className="font-sans-neutralface text-[54px] text-[#95959D]">Hashversion</h1>
        </div>
      </Container>
    </header>
  );
}
