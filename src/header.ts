const navContainer = document.createElement("nav");
const logo = document.createElement("div");
// textContent is the better choice in most cases because it’s faster, safer, and prevents unintended HTML execution.
logo.textContent = "LeWeb🖥️";

type NavLink = {
    text: string;
    url: string;
}

const navLinks:NavLink[] = [
    {text: "Hem", url: "#"}, 
    {text: "Om LeWeb", url: "#"}, 
    {text: "Kundcase", url: "#"}, 
    {text: "Kontakta oss", url: "#"}
]

const ul = document.createElement("ul");

navLinks.forEach((link) => {
  const li = document.createElement("li");
  const navLink = document.createElement("a");
    navLink.innerHTML = link.text;
    navLink.href = link.url;
    li.appendChild(navLink);
    ul.appendChild(li);
    nav.appendChild(ul);
})

navContainer.append(logo, ul);
document.getElementById("header")?.appendChild(navContainer);
