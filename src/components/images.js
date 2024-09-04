// Utility function to generate image paths dynamically
const generateImagePaths = (basePath, count, extension = 'jpg') => {
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      image: `${basePath}${i + 1}).${extension}`,
    }));
  };
  
  // Dynamically generate images array
  const Images = generateImagePaths('images/1 (', 30);
  console.log(generateImagePaths('images/1 (', 30));
  
  
  export default Images;
  