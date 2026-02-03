"use client";

import Link from "next/link";
import { Globe, Sparkles, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StorySection() {
  return (
    <section className="w-full my-16 lg:my-24 bg-white text-center">
      <div className="lg:max-w-7xl mx-auto px-4">
        {/* Header content */}
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-[#000000A3] text-xs md:text-sm font-normal tracking-[-0.5px] uppercase">
            Glimpse of happiness
          </p>
          <h2 className="text-2xl md:text-[32px] tracking-[-1px] font-semibold">
            Behind every custom suit lies a story of grit, transformation, and unshakable determination
          </h2>
        </div>

        {/* Features / Icons */}
        <div className="max-w-5xl mx-auto place-items-center grid grid-cols-1 md:grid-cols-3 mt-8 mb-8 md:mt-16 md:mb-8">
          <div className="hidden md:flex items-center gap-3">
            <Globe className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <span className="font-medium whitespace-nowrap tracking-[-0.5px]">
              Worldwide Stories
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <span className="font-medium whitespace-nowrap tracking-[-0.5px]">
              Stunning Personalities
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <BadgeCheck className="w-6 h-6 text-primary" strokeWidth={1.5} />
            <span className="font-medium whitespace-nowrap tracking-[-0.5px]">
              Unique Suit Designs
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center flex-wrap gap-4">
          <Button
            asChild
            variant="outline"
            className="md:border border-primary text-black hover:bg-primary hover:text-white rounded-[8px] px-4 py-3 text-base font-medium transition-colors tracking-[-0.5px]"
          >
            <Link href="#">
              Share your story
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border border-secondary bg-tertiary text-black hover:bg-primary hover:text-white rounded-[8px] px-4 py-3 text-base font-normal transition-colors tracking-[-0.5px]"
          >
            <Link href="#">
              Book a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
