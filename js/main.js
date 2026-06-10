// main.js — точка входа, инициализация всех модулей

document.addEventListener("DOMContentLoaded", () => {
  Camera.start("user");
  Viewers.start();
  Comments.start();
});
