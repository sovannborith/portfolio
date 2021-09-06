let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

/* left menu*/
let navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach((n) => n.addEventListener("click", (e)=>{
    let links =document.querySelectorAll(".navbar a");
    links.forEach((n) => n.classList.remove("active"));
    n.classList.add("active");
}))



window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
    scrollToActive();

}

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

//window.addEventListener("scroll", scrollActive);

function scrollToActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navbar a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}







let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}