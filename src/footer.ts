const footerContainer = document.createElement("div");

if(footerContainer){
    footerContainer.innerHTML = `
  <div class="footer-column">
    <h3>Kontaktuppgifter</h3>
    <p>Telefon: 012-345 6789</p>
    <p>Email: info@example.com</p>
  </div>
  <div class="footer-column">
    <h3>Följ oss</h3>
    <p>Håll dig uppdaterad genom att följa oss på sociala medier:</p>
    <ul class="social-media">
      <li><a href="#"><i class="fab fa-facebook-f"></i> Facebook</a></li>
      <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
      <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
    </ul>
  </div>
  <div class="footer-column">
    <h3>Adressuppgifter</h3>
    <p>Exempelgatan 1</p>
    <p>123 45 Exempelstad</p>
    <p>Sverige</p>
  </div>
    `;
}

document.getElementById("footer")?.appendChild(footerContainer)