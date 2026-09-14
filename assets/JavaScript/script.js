document.addEventListener("DOMContentLoaded", () => {

  const joinBtn = document.getElementById("join-btn");
  const joinModal = document.getElementById("join-modal");
  const joinClose = document.getElementById("join-close");

  joinBtn.addEventListener("click", (e) => {
    e.preventDefault();
    joinModal.style.display = "flex";
  });

  joinClose.addEventListener("click", () => {
    joinModal.style.display = "none";
  });

  joinModal.addEventListener("click", (e) => {
    if (e.target === joinModal) {
      joinModal.style.display = "none";
    }
  });

});
