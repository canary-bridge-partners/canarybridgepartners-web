/* =====================================
CANARY BRIDGE PARTNERS
PREMIUM INTERACTIVE ENGINE
===================================== */


document.addEventListener(
"DOMContentLoaded",
()=>{


/* ===============================
SCROLL REVEAL
=============================== */


const revealElements =
document.querySelectorAll(
".island-card, .stat-box, .industry-card, .timeline-item, .insights-grid article"
);



const revealObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add(
"visible"
);


}


});


},

{

threshold:0.15

}

);



revealElements.forEach(element=>{


element.classList.add(
"hidden"
);


revealObserver.observe(element);


});






/* ===============================
STAT COUNTER
=============================== */


const counters =
document.querySelectorAll(
".stat-box strong"
);



const counterObserver =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


animateCounter(
entry.target
);


counterObserver.unobserve(
entry.target
);


}


});


},

{

threshold:.8

}

);



counters.forEach(counter=>{

counterObserver.observe(counter);

});




function animateCounter(element){


const text =
element.innerText;


if(isNaN(parseInt(text))){

return;

}


const target =
parseInt(text);


let current=0;


const speed =
target / 60;



const timer =
setInterval(()=>{


current += speed;


if(current>=target){


element.innerText =
target;


clearInterval(timer);


}else{


element.innerText =
Math.floor(current);


}


},20);


}








/* ===============================
HEADER EFFECT
=============================== */


const header =
document.querySelector(
".main-header"
);



window.addEventListener(
"scroll",
()=>{


if(window.scrollY>80){


header.style.background =
"rgba(7,24,47,.92)";


}else{


header.style.background =
"rgba(7,24,47,.35)";


}


});








/* ===============================
SMOOTH ANCHORS
=============================== */


document
.querySelectorAll(
'a[href^="#"]'
)
.forEach(anchor=>{


anchor.addEventListener(
"click",
function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});







/* ===============================
FORM INTERACTION
=============================== */


const form =
document.querySelector(
".premium-form"
);



if(form){


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();



alert(
"Thank you for contacting Canary Bridge Partners. We will contact you shortly."
);



form.reset();




  
























  


}

);


}




});
