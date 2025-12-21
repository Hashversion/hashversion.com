import Container from "@/components/container";
import { Icons } from "@/components/ui/icons";

export function Projects() {
  return (
    <section className="mt-[80px]">
      <Container>
        <div>
          <h1 className="font-krylon mb-8 text-[32px]">Projects</h1>
          <div className="grid grid-cols-3">
            <div className="w-[256px] space-y-[21px] rounded-[14px] border border-[#dcdcdc] bg-[#fafafa] p-[14px] dark:border-neutral-800 dark:bg-neutral-900">
              <div className="w-ful flex items-center gap-8 border-b border-[#dadade] pb-3 dark:border-neutral-600">
                <Icons.Vazen width={32} height={32} />
                <div className="gap[3px] flex flex-col">
                  <h2>Vazen</h2>
                  <p className="text-[11px] text-[#878787]">@vazen.dev</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[13px] text-[#1E1E1E] dark:text-neutral-400">
                  A production-grade monorepo starter for building full-stack applications on cloudflare
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="https://github.com/hashversion/vazen"
                    target="_blank"
                    className="inline-flex items-center gap-[6px] rounded-[13px] border border-[#dcdcdc] bg-white p-2 text-[13px] duration-200 hover:bg-[#dadade] dark:border-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-950"
                  >
                    Visit
                    <span>
                      <Icons.Arrow width={12} height={12} />
                    </span>
                  </a>
                  <p className="inline-flex items-center gap-2 text-[13px] text-[#aaaaaa]">
                    <span className="inline-block size-2.5 animate-pulse rounded-full bg-green-600" />
                    Active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
