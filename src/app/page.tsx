import Container from "@/components/container";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";

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
          <div className="flex items-center justify-between border-b border-[#dadade] pb-2 text-[#626266] dark:border-neutral-500 dark:text-neutral-300">
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
                <div className="flex h-5 w-10 items-center rounded-full bg-[#E6E6E6] px-1 dark:bg-neutral-200">
                  <div className="size-3.5 rounded-full bg-[#fefefe] dark:bg-black" />
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="min-h-screen pt-9">
        <Container>
          <div className="flex gap-12">
            <div className="content-end space-y-2">
              <div className="relative size-[100px]">
                <Image src={"/images/squirrel.png"} alt="squirrel on banana" fill />
              </div>
              <p className="font-krylon text-[14px]">Squirrel Baby</p>
            </div>
            <div className="text-[#323232] dark:text-neutral-200">
              <div className="flex flex-col gap-8">
                <div className="flex items-baseline justify-center gap-4">
                  <div className="size-2 rounded-[3px] bg-black dark:bg-white" />
                  <p className="w-[430px] text-[12px]">
                    Hello, I’m Jay Krishna, a 21 y/o high-school dropout designer, developer, security
                    researcher (hobby), polymath, and young jury member{" "}
                    <a
                      href="https://awwwards.com/jury-member/jaykrishna"
                      target="_blank"
                      className="underline underline-offset-2"
                    >
                      @Awwwards
                    </a>
                  </p>
                </div>
                <div className="flex translate-x-26 items-baseline justify-center gap-4">
                  <div className="size-2 rounded-[3px] bg-black dark:bg-white" />
                  <p className="w-[487px] text-[12px]">
                    I’m currently working on my personal projects and i’m open to full-time design engineering
                    or full-stack roles
                  </p>
                </div>
                <div className="flex translate-x-32 items-baseline justify-center gap-4">
                  <div className="size-2 rounded-[3px] bg-black dark:bg-white" />
                  <p className="w-[300px] text-[12px]">
                    In my free time, I like to listen to music and watch squirrels roam around
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
