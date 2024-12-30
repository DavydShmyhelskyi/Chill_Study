window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.querySelector(".loader");
        loader.classList.add("hidden"); // Додаємо клас для плавного зникнення

        // Затримка перед видаленням з DOM (після завершення анімації)
        setTimeout(() => {
            loader.style.display = "none";
            document.body.classList.remove("loading");
        }, 1000); // Час збігається з `transition: opacity 1s`
    }, 100); // Час затримки перед зникненням лоадера
});
