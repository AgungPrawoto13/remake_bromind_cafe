function checkNavBarState() {
    const myElement = document.getElementById('navigation');

    if (window.matchMedia("(max-width: 768px)").matches){
        // mobile display
        myElement.classList.add('fs-1');
    }
}

checkNavBarState();
window.addEventListener('resize', checkNavBarState);