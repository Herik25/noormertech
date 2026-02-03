"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PlayButton from "@/public/play-button.svg"; 
import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
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

function MobileStoryCard({ story, showSeparator = true }: { story: Story, showSeparator?: boolean }) {
  const [imageIndex, setImageIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageIndex(0);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [story.id]);

  const images = story.media.images || [{ id: 0, src: story.media.src, alt: story.media.alt }];
  const currentImage = images[imageIndex] || images[0];

  return (
    <div className="my-16">
        <div className="relative w-full h-[600px] overflow-hidden">
            <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                className="object-cover w-full overflow-hidden"
            />
            {story.media.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Image src={PlayButton} alt="Play" width={60} height={60} className="w-16 h-16" />
                </div>
            )}
        </div>
        
        <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center justify-between px-2">
                <button 
                    onClick={(e) => { e.stopPropagation(); if (imageIndex > 0) setImageIndex(prev => prev - 1); }}
                    disabled={imageIndex === 0}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        imageIndex === 0 
                        ? "bg-secondary text-white cursor-default"
                        : "bg-primary text-white hover:bg-primary/80 cursor-pointer"
                    }`}
                >
                    <ChevronLeft className="w-6 h-6 ml-[-2px]" />
                </button>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                    {images.map((_, idx) => (
                        <div
                        key={idx}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                            idx === imageIndex ? "bg-[#E10174] w-2.5" : "bg-[#F9A8D4] w-2.5 opacity-50"
                        }`} // Using screenshot colors roughly
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button 
                    onClick={(e) => { e.stopPropagation(); if (imageIndex < images.length - 1) setImageIndex(prev => prev + 1); }}
                    disabled={imageIndex === images.length - 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        imageIndex === images.length - 1 
                        ? "bg-[#E5E7EB] text-gray-400 cursor-default" 
                        : "bg-[#E10174] text-white hover:bg-[#E10174]/90 cursor-pointer" 
                    }`}
                >
                    <ChevronRight className="w-6 h-6 mr-[-2px]" />
                </button>
            </div>

            {/* Content Card */}
            <div className="bg-white py-4 flex flex-col gap-4">
                <div>
                    <h2 className="text-[28px] font-medium tracking-[-1px] mb-2">
                        Meet {story.client.name}
                    </h2>
                    <div className="h-px w-full bg-border mb-4" />
                        <div className="space-y-2">
                            <h3 className="text-lg font-medium tracking-[-0.5px]">
                                {story.quote.title}
                            </h3>
                            <p className="text-[#000000CC] text-base tracking-[-0.5px]">
                                {story.quote.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-2">
                        <Button
                            variant="outline" 
                            className="flex-1 h-12 border-primary text-black hover:text-primary rounded-[8px] justify-center px-4 group relative overflow-hidden cursor-pointer"
                        >
                            <span className="z-10">View suit</span>
                            <div className="absolute w-11.5 h-11.5 right-1 rounded z-0">
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
                            className="flex-1 h-12 border-primary text-black hover:text-primary rounded-[8px] gap-2 cursor-pointer"
                        >
                            <Heart className="w-5 h-5" />
                            Wishlist suit
                        </Button>
                    </div>
                </div>

            <div className="bg-white rounded-[16px] p-5 relative min-h-[120px] flex flex-col justify-center border-2 border-[#00000014]">
                <div className="flex items-center gap-1 mb-2">
                    <span className="text-sm font-normal text-[#000000A3] tracking-[-0.5px] mr-2">REVIEW</span>
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                    ))}
                </div>
                
                <p className="text-black font-regular text-base md:text-lg leading-[-0.5px] max-w-[90%]">
                    Good words about the company and assisting them to achieve whatever.
                </p>

                <div className="absolute top-6 right-6 font-serif select-none">
                    <Image src={QuoteIcon} alt="Quote" width={32} height={32} className="opacity-100" />
                </div>
            </div>
        </div>

        {showSeparator && <div className="h-px w-full max-w-[80px] mx-auto bg-primary mt-10"></div>}
    </div>
  );
}

export default MobileStoryCard;