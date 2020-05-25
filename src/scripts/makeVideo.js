const makeVideo = (url, height, width) => {
    const video = 
    `<video autoplay loop muted playsinline>
        <source src=${url} type="video/webm">
    </video>`

    
    if (height && width) {
      video.height = height;
      video.width = width;
    }

    //comentar linha abaixo no início
    //image.setAttribute('loading', 'lazy')
    return video;
  };
  
  export default makeVideo;