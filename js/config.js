// config.js — панель настроек, слайдеры

const Config = (() => {

  function toggle() {
    document.getElementById("config-panel").classList.toggle("open");
  }

  function updateRange() {
    let mn = parseInt(document.getElementById("min-viewers").value);
    let mx = parseInt(document.getElementById("max-viewers").value);
    if (mn > mx - 5000) mn = mx - 5000;
    if (mx < mn + 5000) mx = mn + 5000;
    Viewers.setRange(mn, mx);
    document.getElementById("min-val").textContent = mn.toLocaleString("pl-PL");
    document.getElementById("max-val").textContent = mx.toLocaleString("pl-PL");
  }

  function updateSpeed() {
    const v = parseInt(document.getElementById("comment-speed").value);
    const label =
      v < 700  ? "Bardzo szybka" :
      v < 1200 ? "Szybka" :
      v < 2200 ? "Normalna" :
      v < 3200 ? "Wolna" : "Bardzo wolna";
    document.getElementById("speed-val").textContent = label;
  }

  return { toggle, updateRange, updateSpeed };
})();
