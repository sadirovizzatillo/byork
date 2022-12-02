// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".menu");
    const body = document.querySelector("body");
    burger.addEventListener("click", () => {
        if (!menu.classList.contains("active")) {
            menu.classList.add("active");
            burger.classList.add("active-burger");
            body.classList.add("locked");
        } else {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
    menu.addEventListener("click", (event) => {
        if (event.target) {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener("resize", () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove("active");
            burger.classList.remove("active-burger");
            body.classList.remove("locked");
        }
    });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector("nav");
    
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1;
    if (window.scrollY >= breakpoint) {
        nav.classList.add("fixed__nav");
    } else {
        nav.classList.remove("fixed__nav");
    }
}
window.addEventListener("scroll", fixedNav);

// DROPDOWN CATALOG
const catalogBtn = document.getElementById("dropdownBtn");

catalogBtn.onmouseover = function () {
    catalogBtn.classList.add("white");
    document.getElementById("dropdownMenu").classList.add("active-drop");
    document.body.classList.add("lock");
    catalogBtn.querySelector(".dropdown-btn-close").classList.add("active");
    catalogBtn.querySelector(".dropdown-btn-open").classList.add("active");
    // document.getElementById("bgGray").classList.toggle("bg-gray-active");
};
catalogBtn.addEventListener("click", function(){
    if(document.getElementById("dropdownMenu").classList.contains("active-drop")){
        catalogBtn.classList.remove("white");
        document.getElementById("dropdownMenu").classList.remove("active-drop");
        document.body.classList.remove("lock");
        catalogBtn.querySelector(".dropdown-btn-close").classList.remove("active");
        catalogBtn.querySelector(".dropdown-btn-open").classList.remove("active");
    }
})

const header = document.querySelector('header');
const drMenu = document.getElementById("dropdownMenu");

drMenu.style.height = "calc(100vh - " + header.offsetHeight + "px)";


