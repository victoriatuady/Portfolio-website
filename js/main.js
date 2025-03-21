const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const navbar = document.querySelector(".nav-section");

//Open navbar
menuBtn.addEventListener("click", () => {
  navbar.classList.add("active");
});

// Close navbar
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("active");
});

// Close navbar when clicking outside
document.addEventListener("click", (event) => {
  if (!navbar.contains(event.target) && !menuBtn.contains(event.target)) {
    navbar.classList.remove("active");
  }
});

// Form Validation
const input = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = input.value.trim();
  const validEmail = email.value.trim().match(regex);

  let isValid = true;

  if (!name) {
    input.style.border = "1px solid  #d73c3c";
    isValid = false;

    setTimeout(() => {
      input.style.border = "1px solid #d9a883";
    }, 2000);
  }

  if (!email.value.trim()) {
    email.style.border = "1px solid  #d73c3c";
    isValid = false;

    setTimeout(() => {
      email.style.border = "1px solid #d9a883";
    }, 2000);
  } else if (!validEmail) {
    email.style.border = "1px solid  #d73c3c";
    email.value = "email@example.com";
    isValid = false;

    setTimeout(() => {
      email.style.border = "1px solid #d9a883";
      email.value = "";
      email.style.color = "#d9a883";
    }, 2000);
  }

  if (!message.value.trim()) {
    message.style.border = "1px solid  #d73c3c";
    isValid = false;

    setTimeout(() => {
      message.style.border = "1px solid #d9a883";
    }, 2000);
  }

  if (isValid) {
    input.value = "";
    email.value = "";
    message.value = "";
  }
});

//Scroll to the top event
const scrollBtn = document.querySelector("#arrow i");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Scroll to top when arrow is clicked
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((reveal) => {
    const position = reveal.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    // let revealPoint = 70;

    if (position < viewportHeight) {
      reveal.classList.add("visible");
    }
  });
});
