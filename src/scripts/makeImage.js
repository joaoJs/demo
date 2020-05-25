const makeImage = (url, height, width) => {
    const image = document.createElement("img");

    if (height && width) {
      image.height = height;
      image.width = width;
    }
    image.src = url;
    return image;
  };
  
  export default makeImage;