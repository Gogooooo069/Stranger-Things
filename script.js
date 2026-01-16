const scene = document.getElementById("scene");
const vecna = document.getElementById("vecna");

let radius = 0;
let revealing = false;
let resetting = false;

scene.addEventListener("mousemove", (e) => {
  if (resetting) return;

  revealing = true;

  // Increase reveal size gradually
  radius += 5;

  const x = e.clientX;
  const y = e.clientY;

  vecna.style.maskImage =
    `radial-gradient(circle ${radius}px at ${x}px ${y}px, white 0%, transparent 70%)`;
  vecna.style.webkitMaskImage =
    `radial-gradient(circle ${radius}px at ${x}px ${y}px, white 0%, transparent 70%)`;

  // When fully revealed → reset
  if (radius >= window.innerWidth * 1.2) {
    resetting = true;

    setTimeout(() => {
      radius = 0;
      resetting = false;

      vecna.style.maskImage =
        `radial-gradient(circle 0px at 50% 50%, white 0%, transparent 70%)`;
      vecna.style.webkitMaskImage =
        `radial-gradient(circle 0px at 50% 50%, white 0%, transparent 70%)`;
    }, 600);
  }
});

// Reset if mouse leaves early
scene.addEventListener("mouseleave", () => {
  radius = 0;

  vecna.style.maskImage =
    `radial-gradient(circle 0px at 50% 50%, white 0%, transparent 70%)`;
  vecna.style.webkitMaskImage =
    `radial-gradient(circle 0px at 50% 50%, white 0%, transparent 70%)`;
});
