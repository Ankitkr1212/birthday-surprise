
const bouquet = document.querySelector(".bouquet");

const flowers = [
    "flower1.jpeg",
    "flower2.jpeg",
    "flower3.jpeg",
    "flower4.jpeg",
    "flower5.jpeg",
    "flower6.jpeg",
    "flower7.jpeg",
    "flower8.jpeg"
];

flowers.forEach((photo, index) => {

    const flower = document.createElement("div");

    flower.classList.add("flower", `flower-${index + 1}`);

    const img = document.createElement("img");

    img.src = `flowers/${photo}`;
    img.alt = "";

    img.onerror = () => {
        console.error("Cannot load:", img.src);
    };

    flower.appendChild(img);

    // Stagger the blooming animation
    const delay = index * 0.5;

    flower.style.animationDelay =
        `${delay}s, ${delay + 1.8}s`;

    bouquet.appendChild(flower);
});

function goToNextPage() {
    window.location.href = "Yes.html";
}


