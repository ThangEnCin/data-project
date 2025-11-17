//script.js

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const pages = [
  document.getElementById("cover"),
  document.getElementById("p1"),
  document.getElementById("p2"),
  document.getElementById("p3"),
  document.getElementById("p4"),
  document.getElementById("p5"),
  document.getElementById("p6"),
  document.getElementById("p7"),
  document.getElementById("p8")
];

let currentPage = 0;

nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    pages[currentPage].classList.add("flipped");
    currentPage++;
  } else {
    nextBtn.disabled = true;
    nextBtn.style.opacity = "0.5";
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    pages[currentPage - 1].classList.remove("flipped");
    currentPage--;
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
  }
});

// Image popup functionality
function openImage(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = imgElement.src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

// Close with Esc key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeImage();
});
