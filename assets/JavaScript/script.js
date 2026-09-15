/* ===========================
   JOIN MODAL
   =========================== */

document.addEventListener("DOMContentLoaded", () => {
  const joinBtn = document.getElementById("join-btn");
  const joinModal = document.getElementById("join-modal");
  const joinClose = document.getElementById("join-close");

  joinBtn.addEventListener("click", e => {
    e.preventDefault();
    joinModal.style.display = "flex";
  });

  joinClose.addEventListener("click", () => {
    joinModal.style.display = "none";
  });

  joinModal.addEventListener("click", e => {
    if (e.target === joinModal) {
      joinModal.style.display = "none";
    }
  });
});

/* ===========================
   ABOUT MODAL
   =========================== */
const aboutBtn = document.querySelector('a[href="#about"]');
const aboutModal = document.getElementById("about-modal");
const aboutClose = document.getElementById("about-close");

aboutBtn.addEventListener("click", e => {
  e.preventDefault();
  aboutModal.style.display = "flex";
});

aboutClose.addEventListener("click", () => {
  aboutModal.style.display = "none";
});

aboutModal.addEventListener("click", e => {
  if (e.target === aboutModal) {
    aboutModal.style.display = "none";
  }
});


/* ===========================
   CONTACT MODAL
   =========================== */
const contactBtn = document.querySelector('a[href="#contact"]');
const contactModal = document.getElementById("contact-modal");
const contactClose = document.getElementById("contact-close");

contactBtn.addEventListener("click", e => {
  e.preventDefault();
  contactModal.style.display = "flex";
});

contactClose.addEventListener("click", () => {
  contactModal.style.display = "none";
});

contactModal.addEventListener("click", e => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

/* ===========================
   LOGIN MODAL
   =========================== */
const loginBtn = document.querySelector('a[href="#login"]');
const loginModal = document.getElementById("login-modal");
const loginClose = document.getElementById("login-close");

loginBtn.addEventListener("click", e => {
  e.preventDefault();
  loginModal.style.display = "flex";
});

loginClose.addEventListener("click", () => {
  loginModal.style.display = "none";
});

loginModal.addEventListener("click", e => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});


/* ===========================
   SIGNUP MODAL
   =========================== */
const signupBtn = document.querySelector('a[href="#signup"]');
const signupModal = document.getElementById("signup-modal");
const signupClose = document.getElementById("signup-close");

signupBtn.addEventListener("click", e => {
  e.preventDefault();
  signupModal.style.display = "flex";
});

signupClose.addEventListener("click", () => {
  signupModal.style.display = "none";
});

signupModal.addEventListener("click", e => {
  if (e.target === signupModal) {
    signupModal.style.display = "none";
  }
});