//selects all elements of html page and inverts color
(function() {
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    
    //reverse any pictures and videos media
    let media = document.querySelectorAll("img, picture, video");
    
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
    })
    })();