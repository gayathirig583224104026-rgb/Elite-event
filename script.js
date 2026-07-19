

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach((item) => {
        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            item.classList.add("active");
        }
    });
});

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");
        overlay.classList.toggle("active");

    });

    overlay.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        overlay.classList.remove("active");

    });

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");
        overlay.classList.remove("active");

    });

});

menuBtn.addEventListener("click",()=>{

    menuBtn.classList.toggle("open");

});