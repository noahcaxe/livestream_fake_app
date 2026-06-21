/**
 * iOS Fullscreen helper
 * 
 * iOS Safari does NOT support the standard Fullscreen API (document.requestFullscreen).
 * The best we can do is:
 * 1. Use "apple-mobile-web-app-capable" meta + "Add to Home Screen" — gives true fullscreen.
 * 2. In browser: hide the address bar by scrolling to top on load and on orientation change,
 *    and lock orientation to landscape/portrait as needed using the Screen Orientation API.
 */

(function () {
  const isLandscape = document.body.classList.contains("landscape-mode") || window.CAMERA_LANDSCAPE;

  // Attempt to lock screen orientation (works in Chrome/Android; silently fails on iOS)
  function lockOrientation() {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock(isLandscape ? "landscape" : "portrait").catch(() => {});
    }
  }

  // Hide address bar trick: scroll to 0,1 then back
  function hideAddressBar() {
    window.scrollTo(0, 1);
    setTimeout(() => window.scrollTo(0, 0), 0);
  }

  // Show a subtle "Add to Home Screen" banner on iOS Safari for true fullscreen
  function showAddToHomePrompt() {
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isInStandaloneMode = window.navigator.standalone === true;
    if (isIOS && !isInStandaloneMode) {
      const banner = document.createElement("div");
      banner.id = "ios-prompt";
      banner.innerHTML = `
        <span>Dla pełnego ekranu: <strong>Udostępnij</strong> → <strong>Dodaj do ekranu&nbsp;głównego</strong></span>
        <button onclick="this.parentElement.remove()">✕</button>
      `;
      document.body.appendChild(banner);
      setTimeout(() => { if (banner.parentElement) banner.remove(); }, 8000);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    lockOrientation();
    hideAddressBar();
    showAddToHomePrompt();
  });

  window.addEventListener("orientationchange", () => {
    setTimeout(hideAddressBar, 300);
  });
})();
