"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/digerati/modal.ts
  var modal = () => {
    const showModalLinks = document.querySelectorAll('[data-modal="show"]'), hideModalLinks = document.querySelectorAll('[data-modal="hide"]'), modal2 = document.querySelector('[data-modal="modal"]');
    if (!showModalLinks || !hideModalLinks || !modal2) {
      return;
    }
    hideModalLinks.forEach((hideModalLink) => {
      hideModalLink.addEventListener("click", () => {
        modal2.classList.add("hide");
      });
    });
    showModalLinks.forEach((showModalLink) => {
      showModalLink.addEventListener("click", () => {
        let speaker = showModalLink.closest('[data-speaker="slide"]');
        if (!speaker) {
          return false;
        }
        modal2.querySelector(['[data-modal="name"]']).innerText = speaker.querySelector('[data-speaker="name"]').innerText;
        modal2.querySelector(['[data-modal="title"]']).innerText = speaker.querySelector('[data-speaker="title"').innerText;
        modal2.querySelector(['[data-modal="thumbnail"]']).src = speaker.querySelector('[data-speaker="thumbnail"]').src;
        modal2.querySelector(['[data-modal="biography"]']).innerHTML = speaker.querySelector('[data-speaker="biography"]').innerHTML;
        modal2.classList.remove("hide");
      }, { passive: true });
    });
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    modal();
  });
})();
//# sourceMappingURL=index.js.map
