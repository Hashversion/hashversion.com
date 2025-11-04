"use client";

import Container from "@/components/container";
import HashversionCard from "@/components/header/hashversion-card";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function Header() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([
      ["[data-animate='text']", { opacity: 1 }, { duration: 0.45, ease: "easeOut" }],
      ["[data-animate='card']", { y: 0 }, { duration: 0.92, ease: "backInOut", at: "-0.3" }],
      ["[data-animate='card']", { rotate: 11 }, { duration: 0.64, ease: [0.68, -0.6, 0.32, 1.6] }],
    ]);
  }, [animate]);

  return (
    <header className="h-fit py-8">
      <Container>
        <div ref={scope} className="relative flex h-[180px] items-center justify-center gap-3">
          <motion.div
            initial={{
              rotate: 0,
              y: "-128%",
            }}
            data-animate="card"
            className="absolute z-20"
          >
            <HashversionCard />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            data-animate="text"
            className="font-sans-neutralface z- 10 text-[54px] text-[#95959D]"
          >
            Hashversion
          </motion.h1>
        </div>
      </Container>
    </header>
  );
}
