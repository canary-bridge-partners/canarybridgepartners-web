document.addEventListener("DOMContentLoaded", function(){


/* SCROLL REVEAL */

const elements = document.querySelectorAll(
".solution-card, .insight-grid div, .intro, .statement"
);


const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},

{
threshold:0.15
}

);


elements.forEach(element=>{

element.classList.add("hidden");

observer.observe(element);

});




/* FORM MESSAGE */


const form = document.querySelector("form");


form.addEventListener("submit", function(e){

e.preventDefault();


alert(
"Thank you for contacting Canary Bridge Partners.\n\nWe will contact you shortly."
);


form.reset();


});



});
