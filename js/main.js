// Smooth Scroll for Ribbon Navigation
document.querySelectorAll('.ribbon a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Image Slider for Photoshop Section
const images = [
    "images in online website/CBE JACKETSHIRT.png",
    "images in online website/1711971477216.jpeg",
    "images in online website/1711971776130.jpeg"
];

let currentIndex = 0;
const imageElement = document.getElementById("photoshop-img");

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imageElement.src = images[currentIndex];
}
