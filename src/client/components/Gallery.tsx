import Card from './Card'
import images from '../../imageList.json'

function Gallery() {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {images.map((image, index) => (
        <Card key={index} imageSrc={image.src} title={image.title} />
      ))}
    </div>
  )
}

export default Gallery
