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

const headerContainer = document.createElement("div");
const logo = document.createElement("div")
logo.innerHTML = "LeWeb🖥️"
const nav = document.createElement("nav")
const ul = document.createElement("ul");

navLinks.forEach((link) => {
    const li = document.createElement("li")
    const navLink = document.createElement("a");

    navLink.innerHTML = link.text;
    navLink.href = link.url;
    li.appendChild(navLink);
    ul.appendChild(li);
    nav.appendChild(ul);
})

headerContainer.append(logo, nav);
document.getElementById("header")?.appendChild(headerContainer)