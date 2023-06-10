var type= new Typed(".anim",{
    strings : ["Web Developer", "Competetive Programmer","Machine Learning Enthusiast" ],
    loop : true,
    typeSpeed: 50,
    backSpeed: 40,
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.h-data, .ab-img, .subtitle',{}); 
sr.reveal('.h-img, .ab-subtitle, .ab-text',{delay: 400}); 
sr.reveal('.h-social-icon',{ interval: 200}); 
sr.reveal('.data,.contact__input',{interval: 200}); 