import Container from "@/components/container";
import Image from "next/image";
export function Bio() {
  return (
    <section className="pt-9">
      <Container>
        <div className="flex gap-12 border-b border-[#dadade] pb-5">
          <div className="content-end space-y-2">
            <div className="relative size-[100px]">
              <Image src={"/images/squirrel.png"} alt="squirrel on banana" fill loading="eager" />
            </div>
            <p className="font-krylon text-[14px]">Squirrel Baby</p>
          </div>
          <div className="grow text-[#323232]">
            <div className="flex flex-col gap-8">
              <div className="flex w-fit items-baseline gap-4">
                <div className="size-2 rounded-[3px] bg-black" />
                <p className="w-[430px] text-[12px]">
                  Hello, I’m Jay Krishna, a 21 y/o high-school dropout full-stack / product engineer, and a
                  polymath
                </p>
              </div>
              <div className="flex w-fit translate-x-26 items-baseline gap-4">
                <div className="size-2 rounded-[3px] bg-black" />
                <p className="w-[487px] text-[12px]">
                  Currently working on my personal projects and open to full-stack or product engineering
                  roles
                </p>
              </div>
              <div className="flex w-fit translate-x-52 items-baseline gap-4">
                <div className="size-2 rounded-[3px] bg-black" />
                <p className="text-[12px]">
                  In my free time, I like to listen to music and watch squirrels roam around
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
