

document.addEventListener("DOMContentLoaded", () => {
  const isLandscape = document.body.classList.contains("landscape-mode") || window.CAMERA_LANDSCAPE;
  // Start front camera (user) – mirrored by default in camera.js
  Camera.start("user");
  Viewers.start();
  Comments.start();
});
