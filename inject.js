function injectScript(fileName) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(fileName);
  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);
}

// Inject both Lenis and the init code
injectScript('lenis.min.js');
injectScript('init-lenis.js');