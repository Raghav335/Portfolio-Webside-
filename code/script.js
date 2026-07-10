// ==========================
// PORTFOLIO SCRIPT
// ==========================

// Footer Year
document.getElementById("year").textContent = new Date().getFullYear();


// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuToggle.innerHTML =
        nav.classList.contains("active") ? "✖" : "☰";

});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

        nav.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});


// ==========================
// Dark / Light Mode
// ==========================

const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeBtn.innerHTML="🌙";

    }

    else{

        themeBtn.innerHTML="☀";

    }

}


// ==========================
// Typing Animation
// ==========================

const roles=[

"Full Stack Developer",

"Backend Developer",

"MERN Stack Developer",

"Node.js Developer"

];

let roleIndex=0;

let charIndex=0;

let typing=true;

const typingElement=document.querySelector(".typing");

function typeEffect(){

if(!typingElement) return;

if(typing){

typingElement.textContent=roles[roleIndex].substring(0,charIndex++);

if(charIndex>roles[roleIndex].length){

typing=false;

setTimeout(typeEffect,1200);

return;

}

}

else{

typingElement.textContent=roles[roleIndex].substring(0,charIndex--);

if(charIndex===0){

typing=true;

roleIndex=(roleIndex+1)%roles.length;

}

}

setTimeout(typeEffect,typing?120:60);

}

typeEffect();


// ==========================
// Scroll Animation
// ==========================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".section,.project-card,.skill-card,.achievement-card").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// ==========================
// Active Navbar
// ==========================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-list a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// Contact Form
// ==========================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Thank you for contacting me! I will get back to you soon.");

form.reset();

});

}