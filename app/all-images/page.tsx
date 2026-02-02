import React from 'react'
import Hero from '../components/home/Hero'
import StorySection from '../components/allImages/StorySection'
import ImageGallery from '../components/allImages/ImageGallery'

function AllImages() {
  return (
    <main className="flex-1 w-full bg-white">
        <Hero />
        <StorySection />
        <ImageGallery />
    </main>
  )
}

export default AllImages