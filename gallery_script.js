document.addEventListener("DOMContentLoaded", function() 
{
  const thumbnails = document.querySelectorAll(".thumbnail");
  const overlay = document.querySelector(".overlay");
  const overlayImage = overlay.querySelector(".overlay-image");
  const imageCaption = overlay.querySelector(".image-caption");

  thumbnails.forEach(thumbnail => 
  {
      thumbnail.addEventListener("mouseover", function() 
      {
        const originalSrc = this.getAttribute("data-original");
        const altText = this.getAttribute("alt");
      
        overlayImage.src = originalSrc;
        imageCaption.textContent = altText;
      
        overlay.style.display = "flex";
      });

        thumbnail.addEventListener("mouseout", function() 
        {
          overlay.style.display = "none";
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const elem = document.querySelector('.gallery');
  const msnry = new Masonry(elem, {
    itemSelector: '.image',
    columnWidth: '.image',
    percentPosition: true
  });
});
