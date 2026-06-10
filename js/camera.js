// camera.js — доступ к камере, переключение front/back

const Camera = (() => {
  let stream = null;
  let facingMode = "user";

  async function start(mode) {
    if (stream) stream.getTracks().forEach(t => t.stop());
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: mode }, audio: false });
      const video = document.getElementById("video");
      video.srcObject = stream;
      video.style.display = "block";
      document.getElementById("cam-icon").style.display = "none";
    } catch (e) {
      console.warn("Camera unavailable:", e);
    }
  }

  async function flip() {
    facingMode = facingMode === "user" ? "environment" : "user";
    await start(facingMode);
  }

  return { start, flip };
})();
