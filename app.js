/* =====================================
   CANARY BRIDGE PARTNERS
   PREMIUM INTERACTIONS
===================================== */


document.addEventListener("DOMContentLoaded", () => {



/* SCROLL REVEAL */


const revealElements = document.querySelectorAll(
".advantage-card, .industry-card, .insights-grid article, .related-card, .contact-card, .timeline-item"
);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("visible");


observer.unobserve(entry.target);


}


});


},{
threshold:0.15
});




revealElements.forEach(element=>{


element.classList.add("reveal");


observer.observe(element);


});








/* HEADER EFFECT */


const header = document.querySelector(".main-header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 60){


header.classList.add("scrolled");


}else{


header.classList.remove("scrolled");


}


});








/* SMOOTH ANCHOR SCROLL */


document.querySelectorAll('a[href^="#"]').forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target=document.querySelector(this.getAttribute("href"));



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});








/* FORM INTERACTION */


const forms=document.querySelectorAll("form");



forms.forEach(form=>{


form.addEventListener("submit",(e)=>{


e.preventDefault();



const button=form.querySelector("button");



if(button){


button.innerHTML="Message Sent ✓";


button.disabled=true;


}


});


});








});
