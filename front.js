
document.addEventListener("DOMContentLoaded", () => {

    const card = document.getElementById("birthdayCard");
    const flower = document.getElementById("flower");
    const button = document.getElementById("myButton");

    let buttonTimer;

    card.addEventListener("click", () => {

        const isOpen = card.classList.toggle("open");

        clearTimeout(buttonTimer);

        if (isOpen) {

            // Start the flower animation
            flower.classList.remove("bloom");

            // Allow the browser to restart the animation
            void flower.offsetWidth;

            flower.classList.add("bloom");

            // Show the arrow after 5 seconds
            buttonTimer = setTimeout(() => {
                button.classList.add("show");
            }, 5000);

        } else {

            // Reset animations when card closes
            flower.classList.remove("bloom");
            button.classList.remove("show");

        }
    });

    // Clicking the arrow should not flip the card back
    button.addEventListener("click", (event) => {
        event.stopPropagation();
    });

});
document.body.classList.toggle("flipped");

const birthdayCard = document.getElementById("birthdayCard");

const backgroundFlowers = document.querySelectorAll(
    ".flower-container .flower"
);

let flowerTimer;

const observer = new MutationObserver(() => {

    clearTimeout(flowerTimer);

    if (birthdayCard.classList.contains("open")) {

        // Change body background
        document.body.classList.add("flipped");

        // Wait for the card flip to finish
        flowerTimer = setTimeout(() => {

            backgroundFlowers.forEach((flower, index) => {

                flower.style.animationDelay = `${index * 0.2}s`;

                flower.classList.add("bloom");

            });

        }, 1000);

    } else {

        // Restore original background
        document.body.classList.remove("flipped");

        // Remove flowers
        backgroundFlowers.forEach(flower => {
            flower.classList.remove("bloom");
        });

    }

});

observer.observe(birthdayCard, {
    attributes: true,
    attributeFilter: ["class"]
});

function goToNextPage() {
    window.location.href = "question-page.html";
}