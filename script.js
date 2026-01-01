console.log("Bismil Builders & Associates Property Page Loaded");

window.addEventListener("DOMContentLoaded", () => {
  const waLink = document.querySelector(".footer a");
  if (waLink) {
    waLink.addEventListener("click", () => {
      console.log("WhatsApp button clicked! Opening chat...");
    });
  }
});