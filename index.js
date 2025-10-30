
// mobile menu slide logic
let togglebtn = document.querySelector("#bars");
let menuslide = document.querySelector(".menuSlide");
let toggled = false;

togglebtn.addEventListener("click", () => {
    if (!toggled) {
      togglebtn.classList.remove("fa-bars");
      togglebtn.classList.add("fa-x");
      menuslide.style.display = "block";
    } else {
      togglebtn.classList.remove("fa-x");
      togglebtn.classList.add("fa-bars");
      menuslide.style.display = "none";
    }
    toggled = !toggled;
  });

function closeMenu (){
    menuslide.style.display = "none";
}

// dark mode logic
let themebtn = document.querySelector('.themeIcon')
let body = document.querySelector('body')
let navlink = document.querySelector('.navLink')
let navbar = document.querySelector('nav')
let footer = document.querySelector('footer')
let theme = document.querySelector('#theme')


let themed = false

themebtn.addEventListener('click', ()=>{
    if(!themed){
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
        body.style.background = 'rgba(49, 44, 44, 0.872)'
        footer.style.background = 'rgba(49, 44, 44, 0.872)'
        navbar.style.background = 'rgba(49, 44, 44, 0.872)'
        body.style.color = 'white'
        navbar.style.color = 'white'
        footer.style.color = 'white'
        themed = !themed
      }else{
        theme.classList.remove("fa-sun");
        theme.classList.add("fa-moon");
        body.style.background = 'aliceblue'
        footer.style.background = 'white'
        navbar.style.background = 'white'
        body.style.color = 'black'
        navbar.style.color = 'black'
        footer.style.color = 'black'
        themed = !themed
    }     
})

