"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import PlayButton from "@/public/play-button.svg";
import Medal from "@/public/medal.svg";
import QuoteIcon from "@/public/quote.svg";
import { CLIENT_STORIES } from "@/app/constants";

export default function ClientStory() {
  const stories = CLIENT_STORIES.slice(0, 3);

  return (
    <section className="w-full max-w-4xl mx-auto my-16 px-4 py-16 lg:my-24 bg-white">
      <div className="flex flex-col gap-16 md:gap-24">
        {stories.map((story) => (
          <div key={story.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
            
            <div className="relative w-full rounded-[24px] overflow-hidden shadow-xl group cursor-pointer">
              <Image
                src={story.media.src}
                alt={story.media.alt}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                unoptimized
              />
              
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

              <div className="absolute inset-0 flex items-center justify-center">
                <Image src={PlayButton} alt="Play Button" width={80} height={80} />
              </div>
            </div>

            <div className="flex flex-col space-y-6 md:max-w-xl">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-medium tracking-[-1px]">
                  Meet {story.client.name}
                </h2>
                <div className="flex items-center gap-2 font-medium">
                  <Image src={Medal} alt="Medal" width={24} height={24} />
                  <span className="text-xs md:text-sm tracking-[-0.5px]">{story.client.subtitle}</span>
                </div>
              </div>

              <div className="relative border-2 border-[#00000014] rounded-[16px] p-4 md:p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium tracking-[-0.5px]">
                    {story.quote.title}
                  </h3>
                  <Image src={QuoteIcon} alt="Quote Icon" width={32} height={32} />
                </div>
                <p className="text-[#000000CC] text-base tracking-[-0.5px]">
                  {story.quote.description}
                </p>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer md:mt-12">
                <div className="relative w-16 h-16 rounded-[12px] overflow-hidden border border-[#00000014] shrink-0">
                  <Image
                    src={story.product.image}
                    alt={story.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-base mb-0.5 tracking-[-0.5px] group-hover:text-primary transition-all">
                    {story.product.name}
                  </h4>
                  <Link 
                    href={story.product.href}
                    className="text-sm underline leading-[150%] tracking-[-0.5px] group-hover:text-primary transition-all inline-flex items-center gap-1"
                  >
                    {story.product.cta}
                  </Link>
                </div>

                <ChevronRight className="w-5 h-5 text-black group-hover:text-primary transition-colors" />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
