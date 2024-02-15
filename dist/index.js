"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/digerati/speakerModal.ts
  var speakerModal = () => {
    const showModalLinks = document.querySelectorAll('[data-modal="show"]'), hideModalLinks = document.querySelectorAll('[data-modal="hide"]'), modal = document.querySelector('[data-modal="modal"]');
    if (!showModalLinks || !hideModalLinks || !modal) {
      return;
    }
    hideModalLinks.forEach((hideModalLink) => {
      hideModalLink.addEventListener("click", () => {
        modal.classList.add("hide");
      });
    });
    showModalLinks.forEach((showModalLink) => {
      showModalLink.addEventListener("click", () => {
        let speaker = showModalLink.closest('[data-speaker="slide"]');
        if (!speaker) {
          return false;
        }
        modal.querySelector(['[data-modal="name"]']).innerText = speaker.querySelector('[data-speaker="name"]').innerText;
        modal.querySelector(['[data-modal="title"]']).innerText = speaker.querySelector('[data-speaker="title"').innerText;
        modal.querySelector(['[data-modal="thumbnail"]']).src = speaker.querySelector('[data-speaker="thumbnail"]').src;
        modal.querySelector(['[data-modal="biography"]']).innerHTML = speaker.querySelector('[data-speaker="biography"]').innerHTML;
        modal.classList.remove("hide");
      }, { passive: true });
    });
  };

  // src/digerati/eventbriteModal.ts
  var eventbriteModal = () => {
    const getConfig = (elementId) => {
      return {
        widgetType: "checkout",
        eventId: "818323175647",
        modal: true,
        modalTriggerElementId: elementId
      };
    };
    window.EBWidgets.createWidget(getConfig("hero-register-button"));
    window.EBWidgets.createWidget(getConfig("navbar-register-button"));
    window.EBWidgets.createWidget(getConfig("early-bird-book-now-button"));
    window.EBWidgets.createWidget(getConfig("regular-book-now-button"));
    window.EBWidgets.createWidget(getConfig("seminary-student-book-now-button"));
    window.EBWidgets.createWidget(getConfig("concert-book-now-button"));
  };

  // src/index.ts
  window.Webflow || [];
  window.Webflow.push(() => {
    document.body.classList.add("webflow-loaded");
    speakerModal();
    eventbriteModal();
  });
})();
//# sourceMappingURL=index.js.map
