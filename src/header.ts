const navLinks: string[] = ["Hem", "Om LeWeb", "Kundcase", "Kontakta oss"]

const headerContainer = document.createElement("div");
const logo = document.createElement("div")
logo.innerHTML = "LeWeb🖥️"
const nav = document.createElement("nav")
const ul = document.createElement("ul");

navLinks.forEach((link) => {
    const li = document.createElement("li")
    const navLink = document.createElement("a");

    navLink.innerHTML = link;
    li.appendChild(navLink);
    ul.appendChild(li);
    nav.appendChild(ul);
})

headerContainer.append(logo, nav);
document.getElementById("header")?.appendChild(headerContainer)