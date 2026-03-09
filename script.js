const cube = document.getElementById('cube');

let isDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;
let rotationX = -20;
let rotationY = 30;

const DRAG_SENSITIVITY = 0.45;

// ─── Mouse Events ───────────────────────────────────────────────

document.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousMouseX = e.clientX;
  previousMouseY = e.clientY;
  document.body.classList.add('dragging');
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const deltaX = e.clientX - previousMouseX;
  const deltaY = e.clientY - previousMouseY;

  rotationY += deltaX * DRAG_SENSITIVITY;
  rotationX -= deltaY * DRAG_SENSITIVITY;

  applyCubeTransform();

  previousMouseX = e.clientX;
  previousMouseY = e.clientY;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.classList.remove('dragging');
});

document.addEventListener('mouseleave', () => {
  isDragging = false;
  document.body.classList.remove('dragging');
});

// ─── Touch Events ───────────────────────────────────────────────

document.addEventListener('touchstart', (e) => {
  isDragging = true;
  previousMouseX = e.touches[0].clientX;
  previousMouseY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const deltaX = e.touches[0].clientX - previousMouseX;
  const deltaY = e.touches[0].clientY - previousMouseY;

  rotationY += deltaX * DRAG_SENSITIVITY;
  rotationX -= deltaY * DRAG_SENSITIVITY;

  applyCubeTransform();

  previousMouseX = e.touches[0].clientX;
  previousMouseY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', () => {
  isDragging = false;
});

// ─── Apply Transform ────────────────────────────────────────────

function applyCubeTransform() {
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}
