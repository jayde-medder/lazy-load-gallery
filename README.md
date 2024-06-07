# Lazy-Load Gallery

This project is a simple gallery web application built with React, Vite, Tailwind CSS, and Shadcn UI. It allows you to display a collection of images with subtitles, with a responsive design that adjusts to different screen sizes.

## Features

- Responsive gallery layout
- Flexbox-based design for auto-sizing and wrapping
- Dynamic generation of image list from a directory
- Simple setup with no database required

## Prerequisites

- Node.js and npm installed on your machine

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/lazy-load-gallery.git
    cd lazy-load-gallery
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Add your images:**

    Place your image files in the `public/images` directory. Make sure the images are named sequentially (e.g., `1.jpg`, `2.jpg`, ..., `13.jpg`).

2. **Update subtitles:**

    Open the `public/images/subtitles.json` file and add subtitles for your images. Here is an example:

    ```json
    {
      "1.jpg": "Subtitle for Image 1",
      "2.jpg": "Subtitle for Image 2",
      "3.jpg": "Subtitle for Image 3",
      "4.jpg": "Subtitle for Image 4",
      "5.jpg": "Subtitle for Image 5",
      "6.jpg": "Subtitle for Image 6",
      "7.jpg": "Subtitle for Image 7",
      "8.jpg": "Subtitle for Image 8",
      "9.jpg": "Subtitle for Image 9",
      "10.jpg": "Subtitle for Image 10",
      "11.jpg": "Subtitle for Image 11",
      "12.jpg": "Subtitle for Image 12",
      "13.jpg": "Subtitle for Image 13"
    }
    ```

3. **Generate the image list:**

    Run the following command to generate the `imageList.json` file based on the images and subtitles:

    ```bash
    npm run generate:imageList
    ```

4. **Start the development server:**

    To run the application locally, use:

    ```bash
    npm start
    ```

    Open your browser and navigate to `http://localhost:3000` to see the gallery.

5. **Build the project:**

    To build the project for production, use:

    ```bash
    npm run build
    ```

    The built files will be in the `dist` directory.

## Project Structure

- `public/images/`: Directory for image files and the `subtitles.json` file.
- `src/components/`: Contains React components (`Card.tsx` and `ImageGallery.tsx`).
- `scripts/generateImageList.js`: Script to generate the `imageList.json` file from the images and subtitles.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `vite.config.js`: Vite configuration file.

## Adding New Images

To add new images, follow these steps:

1. Place the new image files in the `public/images` directory.
2. Update the `subtitles.json` file with subtitles for the new images.
3. Run the `generate:imageList` script:

    ```bash
    npm run generate:imageList
    ```

4. Restart the development server if it's running.

## Troubleshooting

If you encounter issues, make sure you have followed all the steps correctly and check the browser console for any error messages. Feel free to reach out for further assistance.

## License

This project is licensed under the MIT License.
