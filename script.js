const mainImage = document.getElementById("main-image");
const thumbnailRow = document.getElementById("thumbnail-row");
const boardRadios = document.querySelectorAll('input[name="board-color"]');
const frameRadios = document.querySelectorAll('input[name="frame-color"]');
const zoomResult = document.getElementById("zoom-result");
const lens = document.getElementById("lens");

let boardColor = document.querySelector('input[name="board-color"]:checked').dataset.color;
let frameColor = document.querySelector('input[name="frame-color"]:checked').dataset.color;

let cx = 2, cy = 2; // Default zoom factors

function updateImages() {
  const mainSrc = `images/${boardColor}_${frameColor}_1.png`;
  mainImage.src = mainSrc;
  zoomResult.style.backgroundImage = `url('${mainSrc}')`;

  thumbnailRow.innerHTML = "";

  for (let i = 1; i <= 3; i++) {
    const thumbSrc = `images/${boardColor}_${frameColor}_${i}.png`;
    const thumb = document.createElement("img");
    thumb.src = thumbSrc;
    thumb.classList.add("thumb");
    thumb.dataset.angle = i;

    if (i === 1) thumb.classList.add("active");

    thumb.addEventListener("click", () => {
      document.querySelectorAll(".thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
      mainImage.src = thumb.src;
      zoomResult.style.backgroundImage = `url('${thumb.src}')`;
    });

    thumbnailRow.appendChild(thumb);
  }
}

// Attach radio button listeners
boardRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    boardColor = radio.dataset.color;
    updateImages();
  });
});

frameRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    frameColor = radio.dataset.color;
    updateImages();
  });
});

// Initialize zoom
function initZoom() {
  zoomResult.style.backgroundImage = `url('${mainImage.src}')`;
  zoomResult.style.display = "block";
  lens.style.display = "block";

  cx = zoomResult.offsetWidth / lens.offsetWidth;
  cy = zoomResult.offsetHeight / lens.offsetHeight;

  zoomResult.style.backgroundSize = `${mainImage.width * cx}px ${mainImage.height * cy}px`;
}

// Handle lens movement and zoom
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

// Add zoom event listeners
mainImage.addEventListener("mouseenter", initZoom);
mainImage.addEventListener("mouseleave", () => {
  zoomResult.style.display = "none";
  lens.style.display = "none";
});
document.querySelector(".img-container").addEventListener("mousemove", moveLens);
lens.addEventListener("mousemove", moveLens);

// Initial load
updateImages();


