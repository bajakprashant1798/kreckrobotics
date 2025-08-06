const mainImage = document.getElementById("main-image");
const zoomResult = document.getElementById("zoom-result");
const lens = document.getElementById("lens");

let cx = 2, cy = 2;

function initZoom() {
  zoomResult.style.backgroundImage = `url('${mainImage.src}')`;
  zoomResult.style.display = "block";
  lens.style.display = "block";

  cx = zoomResult.offsetWidth / lens.offsetWidth;
  cy = zoomResult.offsetHeight / lens.offsetHeight;

  zoomResult.style.backgroundSize = `${mainImage.width * cx}px ${mainImage.height * cy}px`;
}

function moveLens(e) {
  const rect = mainImage.getBoundingClientRect();

  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;

  x = Math.max(0, Math.min(x, mainImage.width));
  y = Math.max(0, Math.min(y, mainImage.height));

  const lensWidth = lens.offsetWidth;
  const lensHeight = lens.offsetHeight;

  let lensX = x - lensWidth / 2;
  let lensY = y - lensHeight / 2;

  lensX = Math.max(0, Math.min(lensX, mainImage.width - lensWidth));
  lensY = Math.max(0, Math.min(lensY, mainImage.height - lensHeight));

  lens.style.left = lensX + "px";
  lens.style.top = lensY + "px";

  zoomResult.style.backgroundPosition = `-${lensX * cx}px -${lensY * cy}px`;
}

mainImage.addEventListener("mouseenter", initZoom);
mainImage.addEventListener("mouseleave", () => {
  zoomResult.style.display = "none";
  lens.style.display = "none";
});

document.querySelector(".img-container").addEventListener("mousemove", moveLens);
lens.addEventListener("mousemove", moveLens);
// Thumbnail click event logic (NEW ADDITION)
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", function () {
    // Set main image source to clicked thumbnail
    const newSrc = this.src;
    mainImage.src = newSrc;

    // Update zoom background
    zoomResult.style.backgroundImage = `url('${newSrc}')`;

    // Highlight active thumbnail (optional visual cue)
    thumbnails.forEach(t => t.classList.remove("active"));
    this.classList.add("active");
  });
});
