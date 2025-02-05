const navLinks: string[] = ["Hem", "Om LeWeb", "Kundcase", "Kontakta oss"];

const navContainer = document.createElement("nav");
const logo = document.createElement("div");
// textContent is the better choice in most cases because it’s faster, safer, and prevents unintended HTML execution.
logo.textContent = "LeWeb🖥️";

const ul = document.createElement("ul");

navLinks.forEach((link) => {
  const li = document.createElement("li");
  const navLink = document.createElement("a");

  navLink.textContent = link;
  li.appendChild(navLink);
  ul.appendChild(li);
});

navContainer.append(logo, ul);
document.getElementById("header")?.appendChild(navContainer);
