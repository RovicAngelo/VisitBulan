document.addEventListener("DOMContentLoaded", function () {
    // Select all sliders on the page
    const sliders = document.querySelectorAll(".slider");

    // Iterate through each slider
    sliders.forEach((slider) => {
        const images = slider.querySelector(".images");
        const nextBtn = slider.querySelector(".next");
        const prevBtn = slider.querySelector(".prev");

        let currentIndex = 0;

        // Function to show the current image
        const showImage = (index) => {
            const offset = index * -100 + "%";
            images.style.transform = `translateX(${offset})`;
        };

        // Function to handle next button click
        const nextImage = () => {
            currentIndex = (currentIndex + 1) % images.children.length;
            showImage(currentIndex);
        };

        // Function to handle previous button click
        const prevImage = () => {
            currentIndex = (currentIndex - 1 + images.children.length) % images.children.length;
            showImage(currentIndex);
        };

        // Event listeners for next and previous buttons
        nextBtn.addEventListener("click", nextImage);
        prevBtn.addEventListener("click", prevImage);
    });
});