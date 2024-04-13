import React from 'react'
import GalleryGrid from './GalleryGrid'
import GalleryFilter from './GalleryFilter'

export default function Gallery() {
  return (
    <div className='gallery_container'>
      <GalleryFilter/>   
      <GalleryGrid/>
    </div>
  )
}
