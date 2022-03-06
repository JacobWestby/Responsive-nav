function setResponsive() {
    const x = document.getElementById('navLinks');

    if (x.className === "nav__links") {
        x.className = "responsive";
    } else {
        x.className = "nav__links"
    }
}