"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CLIENT_STORIES } from "@/app/constants";
import { Loader2 } from "lucide-react";
import PlayButton from "@/public/play-button.svg"; 
import { Button } from "@/components/ui/button";
import StoryModal from "./StoryModal";
import MobileStoryCard from "./MobileStoryCard";

export default function ImageGallery() {
  const [visibleCount, setVisibleCount] = useState(16);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 768) {
        setVisibleCount(3);
      }
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);
  const [isLoading, setIsLoading] = useState(false);

  const stories = CLIENT_STORIES;
  const visibleStories = stories.slice(0, visibleCount);
  const hasMore = visibleCount < stories.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate a small network delay for better UX feel
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setIsLoading(false);
    }, 600);
  };

  return (
    <section className="w-full my-16 pb-16 lg:pb-24 bg-white">
      <div className="lg:max-w-7xl mx-auto sm:px-4 md:px-8">
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleStories.map((story, index) => (
            <div 
              key={story.id} 
              onClick={() => setSelectedStoryIndex(index)}
              className="relative aspect-4/5 w-full rounded-2xl overflow-hidden group cursor-pointer bg-gray-100"
            >
              <Image
                src={story.media.src}
                alt={story.media.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              
              {/* Dark Overlay */}
              {story.media.type === "video" && <div className="absolute inset-0 bg-black/60 transition-colors duration-300" />}
              
              {/* Play Button - Visible on Hover */}
              {story.media.type === "video" && <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 scale-90">
                 <Image src={PlayButton} alt="Play" width={60} height={60} className="w-12 h-12 md:w-16 md:h-16" />
              </div>}
            </div>
          ))}
        </div>

        <div className="block sm:hidden pt-16">
           {visibleStories.map((story, index) => (
             <MobileStoryCard 
               key={story.id} 
               story={story} 
               showSeparator={!(index === visibleStories.length - 1 && hasMore)}
             />
           ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={handleLoadMore}
              disabled={isLoading}
              variant="outline"
              className="border cursor-pointer border-primary text-black hover:bg-primary hover:text-white rounded-[8px] px-4 py-3 text-base font-medium transition-colors tracking-[-0.5px]"
            >
              {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
              {isLoading ? "Loading..." : "Load More"}
            </Button>
          </div>
        )}

        <StoryModal 
          isOpen={selectedStoryIndex !== null}
          onClose={() => setSelectedStoryIndex(null)}
          story={selectedStoryIndex !== null ? stories[selectedStoryIndex] : null}
        />
      </div>
    </section>
  );
}
