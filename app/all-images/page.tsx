import Hero from '../components/home/Hero'
import StorySection from '../components/allImages/StorySection'
import ImageGallery from '../components/allImages/ImageGallery'
import SpotlightSection from '../components/allImages/SpotlightSection'
import MaterialsSection from '../components/allImages/MaterialsSection'

function AllImages() {
  return (
    <main className="flex-1 w-full bg-white">
        <Hero />
        <StorySection />
        <ImageGallery />
        <SpotlightSection />
        <MaterialsSection />
    </main>
  )
}

export default AllImages