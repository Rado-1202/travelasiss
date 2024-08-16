const menu_b = document.querySelectorAll(".menu_b");
const menu = document.querySelectorAll("#menu");
const pos = document.querySelectorAll(".header_2");
const cancel = document.querySelectorAll(".cancel");
menu_b.forEach(button => {
    button.addEventListener("click", function() {
        menu[0].classList.remove("menu");
        menu[0].classList.add("menu_mob");
        pos[0].classList.add("header_2_m");
        cancel[0].classList.add("show");
        menu_b[0].classList.add("none");
    });
});
cancel.forEach(button => {
    button.addEventListener("click", function() {
        menu[0].classList.add("menu");
        menu_b[0].classList.remove("none");
        menu[0].classList.remove("menu_mob");
        pos[0].classList.remove("header_2_m");
        menu_b[0].classList.add("menu_m");
        cancel[0].classList.remove("show");
        cancel[0].classList.add("none");
    });
});