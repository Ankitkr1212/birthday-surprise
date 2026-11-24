const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

const cryingCat = document.getElementById("cryingCat");
const catMessage = document.querySelector(".cat-message");

let scale = 1;

// NO button functionality
noBtn.addEventListener("click", () => {

    // Increase YES button size
    scale += 0.3;

    yesBtn.style.transform = `scale(${scale})`;

});

// Move NO button randomly
noBtn.addEventListener("mouseenter", moveNoButton);

function moveNoButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

}

yesBtn.addEventListener("click", () => {

    // Display success message
    message.textContent =
        "Yayyy! I knew you'd say YES! ❤️🥰";

    // Hide NO button
    noBtn.style.display = "none";

    // Change crying cat into happy cat
    cryingCat.classList.add("happy");

    // Update cat message
    catMessage.textContent =
        "Yayyy! I knew you would say YES! ❤️";

    // Change background theme
    document.body.classList.add("happy-theme");

    // Make flowers bloom
    bloomFlowers();

    // Wait until animations are visible, then navigate
    setTimeout(() => {
        window.location.href = "Yes.html";
    }, 6000);

});

const flowerContainer = document.getElementById("flowerContainer");

const flowers = ["🌸", "🌷", "🌼", "🌺", "🌻", "💮"];

function bloomFlowers() {

    const positions = [
        { top: "12%", left: "12%" },
        { top: "18%", right: "12%" },
        { top: "45%", left: "5%" },
        { top: "45%", right: "5%" },
        { bottom: "12%", left: "15%" },
        { bottom: "12%", right: "15%" }
    ];

    positions.forEach((position, index) => {

        setTimeout(() => {

            const flower = document.createElement("span");

            flower.classList.add("bloom-flower");

            flower.textContent =
                flowers[Math.floor(Math.random() * flowers.length)];

            Object.assign(flower.style, position);

            flower.style.animationDelay = "0s";

            flowerContainer.appendChild(flower);

        }, index * 250);

    });
}





