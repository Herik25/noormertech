import Hero from "./components/home/Hero";
import StorySection from "./components/home/StorySection";
import ClientStory from "./components/home/ClientStory";

export default function Home() {
  return (
    <main className="flex-1 w-full bg-white">
      <Hero />
      <StorySection />
      <ClientStory />
    </main>
  );
}