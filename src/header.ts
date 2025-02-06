import JSConfetti from "js-confetti";
const jsConfetti = new JSConfetti();

const navContainer = document.createElement("nav");
const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");
const logo = document.createElement("img");
logo.src = "/leWeb-logo.webp";
const confettiBtn = document.createElement("button");
confettiBtn.classList.add("confetti-btn");
confettiBtn.textContent = "🎉";
confettiBtn.addEventListener("click", () => jsConfetti.addConfetti());

type NavLink = {
  text: string;
  url: string;
};

const navLinks: NavLink[] = [
  { text: "Hem", url: "/" },
  { text: "Om LeWeb", url: "/about.html" },
  { text: "Kundcase", url: "#" },
  { text: "Kontakta oss", url: "#" },
];

const ul = document.createElement("ul");

navLinks.forEach((link) => {
  const li = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.innerHTML = link.text;
  navLink.href = link.url;
  li.appendChild(navLink);
  ul.appendChild(li);
  navContainer.appendChild(ul);
});

logoContainer.append(logo);
navContainer.append(logoContainer, confettiBtn, ul);
document.getElementById("header")?.appendChild(navContainer);
