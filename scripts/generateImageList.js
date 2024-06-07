import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const directoryPath = path.join(__dirname, '../public/images')
const outputPath = path.join(__dirname, '../src/imageList.json')
const subtitlesPath = path.join(__dirname, '../public/images/subtitles.json')

let subtitles = {}
if (fs.existsSync(subtitlesPath)) {
  subtitles = JSON.parse(fs.readFileSync(subtitlesPath, 'utf8'))
}

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }

  const images = files
    .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/.test(file)) // Filter image files
    .map((file) => ({
      src: `/images/${file}`,
      title: subtitles[file] || path.basename(file, path.extname(file)),
    }))

  fs.writeFileSync(outputPath, JSON.stringify(images, null, 2))
  console.log('Image list generated successfully!')
})
