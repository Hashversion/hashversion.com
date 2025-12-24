import { Bio } from "@/app/(components)/bio";
import { Projects } from "@/app/(components)/projects";
import Container from "@/components/container";
import { Icons } from "@/components/ui/icons";

const PROFILE_META = [
  { name: "India", icon: Icons.PinLocation },
  { name: "he/him", icon: Icons.GenderMale },
];

const SOCIAL_LINKS = [
  {
    name: "Twitter",
    url: "https://x.com/hashversion",
    icon: Icons.X,
  },
  {
    name: "GitHub",
    url: "https://github.com/hashversion",
    icon: Icons.GitHub,
  },
  {
    name: "Mail",
    url: "mailto:hello@hashversion.com",
    icon: Icons.Mail,
  },
];

export default function Home() {
  return (
    <>
      <section>
        <Container>
          <div className="flex items-center justify-between border-b border-[#dadade] pb-2 text-[#626266]">
            <ul className="flex items-center justify-center gap-3">
              {PROFILE_META.map((item) => {
                return (
                  <li className="flex items-center justify-center gap-2" key={item.name}>
                    <item.icon width={12} height={12} />
                    <p className="text-[12px]">{item.name}</p>
                  </li>
                );
              })}
            </ul>
            <ul className="flex items-center justify-center gap-6">
              {SOCIAL_LINKS.map((link) => (
                <li className="flex items-center justify-center gap-3" key={link.url}>
                  <link.icon width={12} height={12} />
                  <p className="text-[12px] underline-offset-2 hover:underline">
                    <a href={link.url} target="_blank">
                      {link.name}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
            <ul>
              <li className="flex items-center justify-center gap-4">
                <Icons.Volume width={12} height={12} />
                <div className="flex h-5 w-10 items-center rounded-full bg-[#E6E6E6] px-1">
                  <div className="size-3.5 rounded-full bg-[#fefefe]" />
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <Bio />
      <Projects />
    </>
  );
}
