"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import QuoteIcon from "@/public/quote.svg";

interface Story {
  id: number;
  media: {
    type: string;
    src: string;
    alt: string;
    images?: {
      id: number;
      src: string;
      alt: string;
    }[];
  };
  client: {
    name: string;
    subtitle: string;
  };
  quote: {
    title: string;
    description: string;
  };
  product: {
    id: string;
    name: string;
    image: string;
    href: string;
    cta: string;
    productPreview: string;
  };
}

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  story: Story | null;
}

export default function StoryModal({
  isOpen,
  onClose,
  story,
}: StoryModalProps) {
  const [mounted, setMounted] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [lastStoryId, setLastStoryId] = useState<number | undefined>(story?.id);

  if (story?.id !== lastStoryId) {
    setLastStoryId(story?.id);
    setImageIndex(0);
  }

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !story) return null;

  const images = story.media.images || [{ id: 0, src: story.media.src, alt: story.media.alt }];
  const currentImage = images[imageIndex] || images[0];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] md:max-w-[90vw] lg:max-w-[1000px] p-4 md:p-6 bg-tertiary rounded-[40px] border-none gap-0 outline-none [&>button]:hidden">
        <VisuallyHidden>
            <DialogTitle>Story of {story.client.name}</DialogTitle>
        </VisuallyHidden>
        <div className="flex flex-col md:flex-row gap-4 h-full md:h-[600px] lg:h-[650px]">
          <div className="flex flex-col w-full md:w-[45%] h-[400px] md:h-full shrink-0 gap-4">
            
            <div className="relative w-full h-full md:h-[90%] rounded-[20px] overflow-hidden group">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-cover"
              />
              
              <div className="absolute inset-0 flex lg:hidden items-center justify-between p-4 pointer-events-none">
                <button 
                  onClick={(e) => { e.stopPropagation(); setImageIndex(prev => Math.max(0, prev - 1)); }}
                  disabled={imageIndex === 0}
                  className={`w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto transition-opacity ${imageIndex === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setImageIndex(prev => Math.min(images.length - 1, prev + 1)); }}
                  disabled={imageIndex === images.length - 1}
                  className={`w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white pointer-events-auto transition-opacity ${imageIndex === images.length - 1 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex h-[10%] items-center justify-between px-2">
               <button 
                 onClick={(e) => { e.stopPropagation(); if (imageIndex > 0) setImageIndex(prev => prev - 1); }}
                 disabled={imageIndex === 0}
                 className={`w-12 h-12 rounded-full border border-tertiary flex items-center justify-center transition-all ${
                   imageIndex === 0 
                     ? "bg-secondary text-white cursor-default" 
                     : "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                 }`}
               >
                 <ChevronLeft className="w-6 h-6 ml-[-2px]" />
               </button>

               <div className="overflow-hidden w-[86px]">
                  <div 
                    className="flex gap-2 transition-transform duration-300 ease-out"
                    style={{ 
                      transform: `translateX(-${Math.max(0, Math.min(imageIndex - 1, images.length - 4)) * 18}px)` 
                    }}
                  >
                   {images.map((_, idx) => (
                     <div
                       key={idx}
                       className={`h-2.5 rounded-full transition-all shrink-0 duration-300 ${
                         idx === imageIndex ? "bg-primary w-8" : "bg-secondary w-2.5"
                       }`}
                     />
                   ))}
                  </div>
               </div>

               <button 
                 onClick={(e) => { e.stopPropagation(); if (imageIndex < images.length - 1) setImageIndex(prev => prev + 1); }}
                 disabled={imageIndex === images.length - 1}
                 className={`w-12 h-12 rounded-full border border-tertiary flex items-center justify-center transition-all ${
                   imageIndex === images.length - 1 
                     ? "bg-secondary text-white cursor-default" 
                     : "bg-primary text-white hover:bg-primary/90 cursor-pointer"
                 }`}
               >
                 <ChevronRight className="w-6 h-6 mr-[-2px]" />
               </button>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-4 h-full">
            <div className="bg-white rounded-[16px] p-4 md:p-6 flex-1 flex flex-col justify-between border-2 border-[#00000014]">
               <div>
                  <h2 className="text-2xl md:text-[28px] font-medium tracking-[-0.5px] mb-2 md:mb-6">
                    Meet {story.client.name}
                  </h2>
                  <div className="h-px w-full bg-border mb-4 md:mb-6" />
                  
                  <div className="space-y-1 md:space-y-3 mb-4 md:mb-6">
                    <h3 className="text-base md:text-lg font-medium tracking-[-0.5px]">
                      {story.quote.title}
                    </h3>
                    <p className="text-[#000000CC] text-sm md:text-base tracking-[-0.5px] font-normal leading-relaxed">
                      {story.quote.description}
                    </p>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-3 mt-auto">
                 <Button 
                   variant="outline" 
                   className="h-12 border-primary text-black font-medium text-base leading-[150%] tracking-[-0.5px] hover:text-primary cursor-pointer rounded-[8px] px-4 group relative overflow-hidden"
                 >
                   View suit
                   <div className="hidden md:block absolute w-11.5 h-11.5 right-1 rounded">
                      <Image 
                        src={story.product.productPreview} 
                        alt="suit" 
                        fill 
                        className="object-cover" 
                      />
                   </div>
                 </Button>

                 <Button 
                   variant="outline" 
                   className="h-12 border-primary text-black font-medium text-base leading-[150%] tracking-[-0.5px] hover:text-primary cursor-pointer rounded-[8px] gap-2"
                 >
                   <Heart className="w-6 h-6 hidden md:block" />
                   Wishlist suit
                 </Button>
               </div>
            </div>

            <div className="hidden md:flex bg-white rounded-[16px] p-4 md:p-6 relative min-h-[140px] flex-col justify-center border-2 border-[#00000014]">
               <div className="flex items-center gap-1 mb-3">
                 <span className="text-sm font-normal text-[#000000A3] tracking-[-0.5px] mr-2">REVIEW</span>
                 {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                 ))}
               </div>
               
               <p className="text-black font-regular text-base md:text-lg leading-[-0.5px] max-w-[70%]">
                 Good words about the company and assisting them to achieve whatever.
               </p>
               
               <div className="absolute top-6 right-6 font-serif select-none">
                 <Image src={QuoteIcon} alt="Quote" width={32} height={32} className="opacity-100" />
               </div>
            </div>

          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
