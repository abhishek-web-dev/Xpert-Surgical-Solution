(function () {
  const headerHtml = `
<div class="top-bar">
  <div class="container d-flex flex-wrap justify-content-between align-items-center">
    <div>
      <a href="tel:+917827850710"><i class="bi bi-telephone-fill"></i>+91 78278 50710</a>
      <a href="mailto:Xpertsurgicalsolution@gmail.com"><i class="bi bi-envelope-fill"></i>xpertsurgicalsolution@gmail.com</a>
    </div>
    <div class="d-none d-md-block">
      <a href="#"><i class="bi bi-clock-fill"></i>Mon - Sat: 9:00 AM - 7:00 PM</a>
    </div>
  </div>
</div>

<nav class="navbar navbar-expand-lg navbar-xss">
  <div class="container">
    <a class="navbar-brand" href="index.html">
      <img src="./img/Logo_Black.png" alt="Xpert Surgical Solution">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mainNav">
      <ul class="navbar-nav ms-auto align-items-lg-center">
        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="equipDrop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Medical Equipment
          </a>
          <ul class="dropdown-menu" aria-labelledby="equipDrop">
            <li><a class="dropdown-item" href="equipment-rent.html">Medical Equipment on Rent</a></li>
            <li><a class="dropdown-item" href="equipment-sale.html">Medical Equipment on Sale</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="surgical.html">Surgical</a></li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
        <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
          <a href="contact.html" class="btn btn-quote">Get a Quote</a>
        </li>
      </ul>
    </div>
  </div>
</nav>`;

  const footerHtml = `
<footer class="footer">
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4 col-md-6">
        <img src="./img/Logo_White.png" alt="Xpert Surgical Solution" class="footer-logo">
        <p class="small-text">Xpert Surgical Solution is a trusted name in medical equipment rental, sales and surgical supplies. Our mission is to deliver world-class healthcare solutions backed by integrity and service excellence.</p>
        <div class="social mt-3">
          <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" aria-label="Twitter / X"><i class="bi bi-twitter-x"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 col-6">
        <h6>Quick Links</h6>
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="surgical.html">Surgical</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="col-lg-3 col-md-6 col-6">
        <h6>Equipment</h6>
        <a href="equipment-rent.html">Medical Equipment on Rent</a>
        <a href="equipment-sale.html">Medical Equipment on Sale</a>
        <a href="surgical.html">Surgical Instruments</a>
        <a href="contact.html">Request a Quote</a>
      </div>
      <div class="col-lg-3 col-md-6">
        <h6>Reach Us</h6>
        <div class="footer-contact"><i class="bi bi-geo-alt-fill"></i><span>FF-44, Greater Noida W Rd, near SARVODAYA HOSPITAL, Gaur City 2, Greater Noida, Chipyana Khurd Urf Tigri, Uttar Pradesh 201009</div>
        <div class="footer-contact"><i class="bi bi-telephone-fill"></i><span>+91 78278 50710</span></div>
        <div class="footer-contact"><i class="bi bi-envelope-fill"></i><span>Xpertsurgicalsolution@gmail.com</span></div>
      </div>
    </div>
    <div class="copyright">
      <span>&copy; 2026 Xpert Surgical Solution. All Rights Reserved.</span>
      <span class="design-credit">Developed & Managed by <a href="https://lso360seoplugin.com/" target="_blank" rel="noopener">Advertising India</a></span>
    </div>
  </div>
</footer>`;

  const equipmentPages = new Set(["equipment-rent.html", "equipment-sale.html"]);

  function currentPage() {
    return window.location.pathname.split("/").pop() || "index.html";
  }

  function setActiveNav() {
    const current = currentPage();
    const nav = document.querySelector(".navbar-xss");
    if (!nav) return;

    nav.querySelectorAll(".nav-link").forEach((link) => {
      const isCurrent = link.getAttribute("href") === current;
      link.classList.toggle("active", isCurrent);
      if (isCurrent) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    nav.querySelectorAll(".dropdown-item").forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === current);
    });

    if (equipmentPages.has(current)) {
      const equipmentLink = nav.querySelector(".dropdown-toggle");
      if (equipmentLink) equipmentLink.classList.add("active");
    }
  }

  document.querySelectorAll(".site-header").forEach((target) => {
    target.outerHTML = headerHtml;
  });

  document.querySelectorAll(".site-footer").forEach((target) => {
    target.outerHTML = footerHtml;
  });

  setActiveNav();
})();
