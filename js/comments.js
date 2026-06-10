// comments.js — поток комментариев, скорость, рендер

const Comments = (() => {
  let idx = 0;
  let timeoutId = null;

  function getDelay() {
    const speed = parseInt(document.getElementById("comment-speed").value);
    return speed + (Math.random() - 0.5) * speed * 0.6;
  }

  function render() {
    const area = document.getElementById("comments-area");
    const [user, text] = Data.comments[idx % Data.comments.length];
    idx++;

    const color = Data.avatarColors[Math.floor(Math.random() * Data.avatarColors.length)];
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
      <div class="comment-avatar" style="background:${color}">${user[0].toUpperCase()}</div>
      <div class="comment-bubble">
        <div class="comment-user">@${user}</div>
        <div class="comment-text">${text}</div>
      </div>`;

    area.appendChild(div);
    while (area.children.length > 8) area.removeChild(area.firstChild);
  }

  function schedule() {
    render();
    timeoutId = setTimeout(schedule, getDelay());
  }

  function start() { schedule(); }

  return { start };
})();
