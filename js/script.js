/* =========================================================
   PUBLIC SPACE USAGE & DIGITAL MAPPING
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuBtn.setAttribute(
                "aria-label",
                "Close menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuBtn.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    });


    /* Close menu after clicking a navigation link */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (item) {

        item.addEventListener("click", function () {

            navLinks.classList.remove("show");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuBtn.setAttribute(
                "aria-label",
                "Open menu"
            );

        });

    });

}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

    if (!menuBtn || !navLinks) {
        return;
    }

    const clickedMenu =
        menuBtn.contains(event.target);

    const clickedNavigation =
        navLinks.contains(event.target);

    if (
        !clickedMenu &&
        !clickedNavigation &&
        navLinks.classList.contains("show")
    ) {

        navLinks.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        menuBtn.setAttribute(
            "aria-label",
            "Open menu"
        );

    }

});


/* =========================================================
   NAVBAR SHADOW ON SCROLL
========================================================= */

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 15) {

            navbar.style.boxShadow =
                "0 4px 18px rgba(25, 60, 43, 0.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });

}


/* =========================================================
   PREVENT BROKEN IMAGE LAYOUT
========================================================= */

const images = document.querySelectorAll("img");

images.forEach(function (image) {

    image.addEventListener("error", function () {

        image.style.backgroundColor = "#e8eee2";

    });

});