document.addEventListener('DOMContentLoaded', async function () {
    const counter = document.querySelector(".counter-number"); // Get the counter element

    if (!counter) {
        console.error("The counter element was not found on the page.");
        return;
    }

    try {
        // Fetch the view count from your AWS Lambda URL
        let response = await fetch("https://evia37dsjplbewvbni3nh7rubi0dvoxl.lambda-url.eu-north-1.on.aws/");
        let data = await response.json(); // Assume the response is a simple number

        // Update the view counter element with the fetched data
        counter.innerHTML = `Views: ${data}`;
    } catch (error) {
        console.error("Error fetching the view count:", error);
        counter.innerHTML = "Views: Error";
    }
});