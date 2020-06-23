function clickMenu() {
    var icone = document.getElementById("icone")
    var menu = document.getElementById("responsivo");
    var aparecer = document.getElementById("aparecer");

    icone.classList.toggle("fa-times");
    aparecer.classList.toggle("aparecer");
    aparecer.classList.toggle("display-nav");
    menu.classList.toggle("menu-responsivo");
}
