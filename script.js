// ==============
// EPZ site config
// ==============
// Put your Calendly URL here:
const CONFIG = {
  calendlyUrl: "https://calendly.com/YOUR-LINK-HERE",
  phoneDisplay: "(716) 380-5411",
  phoneTel: "+17163805411"
};

function setPhoneLinks() {
  const els = [
    document.getElementById("phoneText"),
    document.getElementById("phoneLink"),
    document.getElementById("phoneLink2")
  ].filter(Boolean);

  const phoneHref = `tel:${CONFIG.phoneTel}`;
  for (const el of els) {
    if (el.id === "phoneText") {
      el.textContent = CONFIG.phoneDisplay;
    } else {
      el.textContent = CONFIG.phoneDisplay;
      el.setAttribute("href", phoneHref);
    }
  }
}

// function wireBookNowButtons() {
//   const btns = document.querySelectorAll("[data-book-now]");
//   btns.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault();
//       if (!CONFIG.calendlyUrl || CONFIG.calendlyUrl.includes("YOUR-LINK-HERE")) {
//         alert("Set your Calendly link in script.js (CONFIG.calendlyUrl).");
//         return;
//       }
//       window.open(CONFIG.calendlyUrl, "_blank", "noopener,noreferrer");
//     });
//   });
// }

function wireBookNowButtons() {
  const btns = document.querySelectorAll("[data-book-now]");
  btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "book.html";
    });
  });
}


function wireMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  if (!hamburger || !mobileNav) return;

  const close = () => {
    mobileNav.hidden = true;
    hamburger.setAttribute("aria-expanded", "false");
  };

  const open = () => {
    mobileNav.hidden = false;
    hamburger.setAttribute("aria-expanded", "true");
  };

  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.getAttribute("aria-expanded") === "true";
    isOpen ? close() : open();
  });

  // Close after clicking a link
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => close());
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function setYear() {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

// Init
setPhoneLinks();
wireBookNowButtons();
wireMobileMenu();
setYear();


(function () {
  const slider = document.querySelector("[data-slider]");
  if (!slider) return;

  const images = slider.querySelectorAll(".slider-image");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Optional autoplay
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 4500);
})();
