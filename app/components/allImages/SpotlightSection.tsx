"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MedalIcon from "@/public/pink-medal.svg";
import QuoteIcon from "@/public/pink-quotes-icon.svg";

export default function SpotlightSection() {
  return (
    <section className="w-full my-16 lg:my-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full pointer-events-none" style={{ background: "radial-gradient(50% 50% at 50% 50%, #FDF2F9 53.85%, #FFFFFF 100%)"}} />

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center py-16">
        <h2 className="text-2xl md:text-[28px] text-black font-medium mb-8 tracking-[-1px]">
          We’re opening the spotlight to you,<br />
          our incredible athletes.
        </h2>

        <p className="text-[#1C1C1C] font-medium mb-4 tracking-[-0.5px]">Tell us:</p>

        <div className="bg-white rounded-[16px] p-4 md:p-6 text-left mb-6 max-w-lg mx-auto">
          <ul className="space-y-6">
            <li className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
              <Image src={MedalIcon} alt="Medal" width={24} height={24} className="mt-1 shrink-0" />
              <span className="text-black text-sm md:text-base tracking-[-0.5px] max-w-[340px]">
                What was going through your mind during prep?
              </span>
              <Image src={QuoteIcon} alt="Quote" width={32} height={32} className="opacity-100" />
            </li>
            <li className="flex items-start gap-4 max-w-[400px]">
              <Image src={MedalIcon} alt="Medal" width={24} height={24} className="mt-1 shrink-0" />
              <span className="text-black text-sm md:text-base tracking-[-0.5px]">
                How did stepping on stage in your suit make you feel?
              </span>
            </li>
            <li className="flex items-start gap-4 max-w-[400px]">
              <Image src={MedalIcon} alt="Medal" width={24} height={24} className="mt-1 shrink-0" />
              <span className="text-black text-sm md:text-base tracking-[-0.5px]">
                What’s one moment that changed everything?
              </span>
            </li>
          </ul>
        </div>

        <Button
          asChild
          variant="outline"
          className="w-full max-w-lg border border-primary text-black hover:bg-primary hover:text-white rounded-[8px] px-8 py-6 text-base font-medium transition-colors tracking-[-0.5px] leading-[150%] mb-10"
        >
          <Link href="#">
            Share your story with Everyone
          </Link>
        </Button>

        <p className="text-center text-[#000000CC] text-sm md:text-base max-w-2xl mx-auto tracking-[-0.5px]">
          ✨ Your story could uplift someone just starting. Motivate someone who almost gave up. Show what’s possible with heart and hustle.
        </p>

      </div>
    </section>
  );
}
