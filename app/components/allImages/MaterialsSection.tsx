"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MaterialsImage from "@/public/materials.png";
import HeadphoneIcon from "@/public/headphone.svg";

export default function MaterialsSection() {
  return (
    <section className="w-full my-16 lg:my-24 px-4 py-8 bg-white flex justify-center">
      <div className="w-full max-w-[1240px] bg-tertiary rounded-[16px] overflow-hidden flex md:flex-row items-center justify-between relative md:min-h-[400px]">
        <div className="z-10 flex flex-col justify-center items-center md:items-start w-full md:w-1/2 p-8 md:p-12 lg:p-16 space-y-2">
          <Image src={HeadphoneIcon} alt="Headphone" width={42} height={42} className="block md:hidden" />
          <h2 className="text-2xl md:text-[28px] font-medium text-black tracking-[-1px] md:max-w-[350px] text-center md:text-start">
            Get Ready for your next Competition
          </h2>
          
          <p className="text-[#1C1C1C] text-sm leading-relaxed font-normal max-w-md tracking-[-0.5px] text-center md:text-start">
            Not sure which style suits you? Chat with our experts on Instagram for a quick call! Get FREE design samples and expert advice on colors and cuts that meet your federation’s requirements!
          </p>

          <Button
            asChild
            className="w-full md:w-fit border border-primary bg-primary hover:bg-white text-white hover:text-primary rounded-[8px] px-8 py-6 text-base font-medium transition-colors tracking-[-0.5px] leading-[150%] mt-4"
          >
            <Link href="#">
              Book a Free Consultation
            </Link>
          </Button>
        </div>

        <div className="hidden md:flex relative w-full md:w-1/2 h-64 md:h-full items-end justify-end">
           <div className="relative w-full h-full min-h-[300px] md:min-h-auto md:absolute md:top-0 md:right-0 md:bottom-0">
             <Image
               src={MaterialsImage}
               alt="Competition Suit Materials"
               fill
               className="object-contain object-bottom md:object-bottom-right"
               sizes="(max-width: 768px) 100vw, 50vw"
             />
           </div>
        </div>
      </div>
    </section>
  );
}
