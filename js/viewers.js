// viewers.js — счётчик зрителей, флуктуация в заданном диапазоне

const Viewers = (() => {
  let min = 30000;
  let max = 150000;
  let current = 84321;

  function fmt(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(2).replace(".", ",") + " M";
    return n.toLocaleString("pl-PL");
  }

  function tick() {
    const drift = (Math.random() - 0.48) * ((max - min) * 0.025);
    current = Math.max(min, Math.min(max, current + drift));
    document.getElementById("viewers-count").textContent = fmt(Math.round(current));
  }

  function setRange(newMin, newMax) {
    min = newMin;
    max = newMax;
    if (current < min) current = min;
    if (current > max) current = max;
  }

  function start() {
    setInterval(tick, 1200);
  }

  return { start, setRange, getMin: () => min, getMax: () => max };
})();
