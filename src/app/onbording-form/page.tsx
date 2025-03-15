"use client"

import BackdropGradient from "@/components/backdrop-gradient";
import GlassCard from "@/components/glass-card";
import Image from "next/image";
import ExhibitorInfoForm from "./_components/exhibitor-info";
import { motion } from "motion/react"

const OnbordingForm = () => {
  return (
    <div className="container min-h-dvh min-w-full flex justify-center items-center">
      <div className="flex flex-col w-full items-center">
        <motion.div
        initial={{
            opacity: 0,
        }}
        animate={{
            opacity: 1,
            transition: { duration: 0.3, ease: [0.4, 0.0, 0.6, 1] },
        }}
        >
        <Image
          src="/images/opexn_logo.png"
          alt="opexn logo"
          width={200}
          height={50}
        />
        </motion.div>
        <BackdropGradient
          className="w-4/12 h-2/6 opacity-80 "
          container="flex flex-col items-center"
        >
          <GlassCard className="xs:w-full max-sm:w-full max-sm:px-5 md:w-[50vw] lg:w-5/12 p-7 mb-5">
            <h1 className="w-full text-center font-semibold text-xl md:text-2xl text-white">
              Exhibitor Onbording Form
            </h1>
            <ExhibitorInfoForm />
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  );
};

export default OnbordingForm;
