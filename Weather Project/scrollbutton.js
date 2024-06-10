var scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", function(){
    if(window.scrollY > ( window.innerHeight / 2 )){
        scrollToTopButton.style.visibility = "visible";
        return;
    }

    this.scrollToTopButton.style.visibility = "hidden";
})