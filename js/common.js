(window.onresize = window.__setFontSize__ = function () {
    document.documentElement.style.fontSize = Math.min(750, Math.max(document.documentElement.clientWidth, 320)) / 375 * 37.5 + 'px'
  }
  )();