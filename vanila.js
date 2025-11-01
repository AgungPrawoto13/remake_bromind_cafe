function checkNavBarState() {
    const myElement = document.getElementById('navigation');
    const myDesktop = document.getElementById('desktop');
    const myMobile = document.getElementById('mobile');

    if (window.matchMedia("(max-width: 768px)").matches){
        // for mobile
        myElement.classList.add('fs-1');
        myMobile.classList.add('show');

    } else {
        // for desktop
        myDesktop.classList.add('show');
    }
}

checkNavBarState();
window.addEventListener('resize', checkNavBarState);