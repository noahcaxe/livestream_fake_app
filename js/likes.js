

const Likes = (() => {
  let count = 48200;

  function fmt(n) {
    return n >= 1000 ? (n / 1000).toFixed(1).replace(".", ",") + "k" : String(n);
  }

  function add() {
    count += Math.floor(Math.random() * 50 + 10);
    const el = document.getElementById("likes-count");
    el.textContent = fmt(count);
    el.style.transform = "scale(1.35)";
    setTimeout(() => { el.style.transform = "scale(1)"; }, 150);
  }

  return { add };
})();
