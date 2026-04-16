const tiltCards = document.querySelectorAll(".tilt");
const MAX_TILT_DEGREES = 12;

tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * MAX_TILT_DEGREES;
    const rotateX = (0.5 - y / rect.height) * MAX_TILT_DEGREES;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg)";
  });
});
