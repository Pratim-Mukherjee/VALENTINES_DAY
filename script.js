document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("message").style.display = "block";
    document.querySelector(".buttons").style.display = "none";
    document.getElementById("surprise").style.display = "block";

    // Generate floating hearts when "Yes" is clicked
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    let x = Math.random() * window.innerWidth - 100;
    let y = Math.random() * window.innerHeight - 50;
    this.style.left = x + "px";
    this.style.top = y + "px";
});

// Floating Hearts Background Effect
function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random speed
    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 5000);
}

// Generate random floating hearts continuously
setInterval(createHeart, 800);
