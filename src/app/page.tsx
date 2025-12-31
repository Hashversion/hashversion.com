import { Bio } from "@/app/(components)/bio";
import { InfoNav } from "@/app/(components)/info-nav";
import { Projects } from "@/app/(components)/projects";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <>
      <motion.main
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 0.44, delay: 1.53, ease: "circInOut" }}
      >
        <InfoNav />
        <Bio />
        <Projects />
      </motion.main>
    </>
  );
}
