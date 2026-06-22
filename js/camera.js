const Camera = (() => {
  let stream = null;
  let facingMode = "user";

  async function start(mode) {
    if (stream) stream.getTracks().forEach(t => t.stop());
    const videoConstraints = { facingMode: mode };

    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false });
      const video = document.getElementById("video");
      video.srcObject = stream;
      video.style.display = "block";
      document.getElementById("cam-icon").style.display = "none";

      // Mirror only the front (user) camera
      video.style.transform = (mode === "user") ? "scaleX(-1)" : "scaleX(1)";
    } catch (e) {
      console.warn("Camera unavailable:", e);
    }
  }

  async function flip() {
    facingMode = facingMode === "user" ? "environment" : "user";
    await start(facingMode);
  }

  return { start, flip, getFacingMode: () => facingMode };
})();