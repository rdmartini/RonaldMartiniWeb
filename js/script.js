window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav")
    nav.classList.toggle("down", window.scrollY > 0);
})