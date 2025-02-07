document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("message").style.display = "none";
    document.getElementById("surprise").style.display = "none";
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").style.display = "block";
    document.getElementById("surprise").style.display = "block";
    document.querySelector(".buttons").style.display = "none";

    for (let i = 0; i < 20; i++) {
        createHeart();
    }
});

// "No" Button Moves Away
document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    this.style.left = x + "px";
    this.style.top = y + "px";
});

// If she tries clicking "No", it moves away again 😆
document.getElementById("noBtn").addEventListener("click", function() {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);
    this.style.left = x + "px";
    this.style.top = y + "px";
});

// Floating Hearts Effect
function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}

setInterval(createHeart, 800);
