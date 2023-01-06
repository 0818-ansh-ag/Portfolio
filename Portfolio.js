console.log("This is my portfolio");

let Home = document.getElementById('Home');
let About = document.getElementById('About');
let Service = document.getElementById('Service');
let Contact = document.getElementById('Contact');

let main = document.querySelector(".main-content");
let about = document.querySelector(".About-content");
let service = document.querySelector(".Services-content");
let contact = document.querySelector(".Contact-content");

Home.addEventListener("click",()=>{
     main.classList.remove("hidden");
     console.log("you click");
     about.classList.add("hidden");
     service.classList.add("hidden");
     contact.classList.add("hidden");
})
About.addEventListener("click",()=>{
    about.classList.remove("hidden");
    console.log("you click");
    main.classList.add("hidden");
    service.classList.add("hidden");
    contact.classList.add("hidden");
})
Service.addEventListener("click",()=>{
    service.classList.remove("hidden");
    about.classList.add("hidden");
    main.classList.add("hidden");
    contact.classList.add("hidden");
}
)
Contact.addEventListener("click",()=>{
    console.log("Click Contact")
    contact.classList.remove("hidden");
    service.classList.add("hidden");
    about.classList.add("hidden");
    main.classList.add("hidden");

})
// main.classList.add("hidden");