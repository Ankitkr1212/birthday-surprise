const app = document.getElementById("app");

// Define different pages
const pages = {
    front: `
        <h1>Welcome Home!</h1>
        <p>This is the Home page.</p>
    `,

    question: `
        <a href = "question-page.html"></a>
    `,

    No: `
        <h1>Contact Us</h1>
        <p>This is the Contact page.</p>
    `
};

// Function to display a page
function navigate() {

    // Get the current URL hash
    const page = location.hash.slice(1) || "home";

    // Display the corresponding content
    app.innerHTML = pages[page] || "<h1>404 - Page Not Found</h1>";
}

// Listen for navigation changes
window.addEventListener("hashchange", navigate);

// Display the initial page
navigate();
