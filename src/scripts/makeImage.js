const makeImage = (url, webpUrl ) => {

    let image;

    if (webpUrl) {
      image = 
        `<picture>
          <source srcset="${webpUrl}" type="image/webp">
          <source srcset="${url}" type="image/png">
          <img src="${url}" alt="Alt Text!" loading="lazy">
        </picture>
        `
    } else {
      image = `<img src=${url}>`
    }
    
    return image;
  };
  
  export default makeImage;

  //<img src="img/${url}.png" alt="Alt Text!" loading="lazy">