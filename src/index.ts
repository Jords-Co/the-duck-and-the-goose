import { speakerModal } from '$digerati/speakerModal';
import { eventbriteModal } from '$digerati/eventbriteModal';

window.Webflow || [];
window.Webflow.push(() => {
  /* Prevent FOUT */
  document.body.classList.add('webflow-loaded');
  speakerModal();
  eventbriteModal();
});