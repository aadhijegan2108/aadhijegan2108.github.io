// ================================
// MOBILE NAVIGATION
// ================================

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (!menuButton || !navLinks) {
        return;
    }

    menuButton.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("mobile-open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );

        menuButton.textContent = isOpen ? "✕" : "☰";
    });


    // Close menu after selecting a navigation link

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("mobile-open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

            menuButton.textContent = "☰";
        });

    });

});