// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

// Moving NO Button
function moveNoButton(btn) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}

// Slideshow
let slideIndex = 1;

function nextSlide() {
    slideIndex++;
    document.getElementById("slideImg").src =
        "https://picsum.photos/300/400?random=" + slideIndex;
}
