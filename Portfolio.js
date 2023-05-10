console.log("This is my portfolio");
// let main = document.querySelector(".main").c
// console.log(main);
let Home = document.getElementById("Home");
let About = document.getElementById("About");
let Service = document.getElementById("Service");
let Contact = document.getElementById("Contact");
let Portfolio = document.getElementById("Portfolio");

let main = document.querySelector(".main-content");
let about = document.querySelector(".About-content");
let service = document.querySelector(".Services-content");
let contact = document.querySelector(".Contact-content");
let portfolio = document.querySelector(".Portfolio-content");

let homeBtn = document.querySelector(".homeBtn");
let aboutBtn = document.querySelector(".aboutBtn");
let serviceBtn = document.querySelector(".serviceBtn");
let contactBtn = document.querySelector(".contactBtn");
let portfolioBtn = document.querySelector(".portfolioBtn");

Home.addEventListener("click", () => {
  main.classList.remove("hidden");
  console.log("you click");
  about.classList.add("hidden");
  service.classList.add("hidden");
  contact.classList.add("hidden");
  portfolio.classList.add("hidden");

  homeBtn.classList.add("active");
  aboutBtn.classList.remove("active");
  serviceBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  portfolioBtn.classList.remove("active");

  //  for(let i=0;i<main.length;i++)
  //  {
  //     main[i].classList.add("hidden")
  //  }
  //  main[0].remove("hidden")
});
About.addEventListener("click", () => {
  aboutBtn.classList.add("active");
  homeBtn.classList.remove("active");
  serviceBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  portfolioBtn.classList.remove("active");

  about.classList.remove("hidden");
  console.log("you click");
  main.classList.add("hidden");
  service.classList.add("hidden");
  contact.classList.add("hidden");
  portfolio.classList.add("hidden");

  // for(let i=0;i<main.length;i++)
  // {
  //    main[i].classList.add("hidden")
  // }
  // main[2].remove("hidden")
});
Portfolio.addEventListener("click", () => {
  service.classList.add("hidden");
  about.classList.add("hidden");
  main.classList.add("hidden");
  contact.classList.add("hidden");
  portfolio.classList.remove("hidden");

  serviceBtn.classList.remove("active");
  homeBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  portfolioBtn.classList.add("active");
});
Service.addEventListener("click", () => {
  service.classList.remove("hidden");
  about.classList.add("hidden");
  main.classList.add("hidden");
  contact.classList.add("hidden");
  portfolio.classList.add("hidden");

  serviceBtn.classList.add("active");
  homeBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  contactBtn.classList.remove("active");
  portfolioBtn.classList.remove("active");
});
Contact.addEventListener("click", () => {
  console.log("Click Contact");
  contact.classList.remove("hidden");
  service.classList.add("hidden");
  about.classList.add("hidden");
  main.classList.add("hidden");
  portfolio.classList.add("hidden");

  homeBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  serviceBtn.classList.remove("active");
  contactBtn.classList.add("active");
  portfolioBtn.classList.remove("active");
});
// main.classList.add("hidden");

// Send Email

let send = document.getElementById("send");
send.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("you click send");
  let name = document.getElementById("Name").value;
  console.log(name);
  let email = document.getElementById("Email").value;
  console.log(email);
  let subject = document.getElementById("Subject").value;
  let message = document.getElementById("Message").value;
  let body =
    "name: " +
    name +
    "<br/> email: " +
    email +
    "<br/> subject: " +
    subject +
    "<br/> message: " +
    message;
  Email.send({
    SecureToken: "e441437d-d30d-4d69-afb3-9f6db5130b78",
    To: "3542ansh.ag@gmail.com",
    From: "0818ansh.ag@gmail.com",
    Subject: "Contact Message",
    Body: body,
  }).then((message) => alert(message));
});

//hire button

let hire = document.getElementById("hire");
hire.addEventListener("click", function () {
  console.log("Click hire");
  contact.classList.remove("hidden");
  service.classList.add("hidden");
  about.classList.add("hidden");
  main.classList.add("hidden");

  homeBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  serviceBtn.classList.remove("active");
  contactBtn.classList.add("active");
});

let aboutus = document.getElementById("aboutus");
aboutus.addEventListener("click", function () {
  console.log("Click hire");
  contact.classList.add("hidden");
  service.classList.add("hidden");
  about.classList.remove("hidden");
  main.classList.add("hidden");

  homeBtn.classList.remove("active");
  aboutBtn.classList.add("active");
  serviceBtn.classList.remove("active");
  contactBtn.classList.remove("active");
});
