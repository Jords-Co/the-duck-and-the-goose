/**
 * Dynamically populate Speaker Modal
 * with CMS Collection Item Properties
 * from corresponding Speaker Slider.
 */
export const modal = () => {
    const showModalLinks = document.querySelectorAll('[data-modal="show"]'),
        hideModalLinks = document.querySelectorAll('[data-modal="hide"]'),
        modal = document.querySelector('[data-modal="modal"]');
    if (!showModalLinks || !hideModalLinks || !modal) {
        return;
    }
    hideModalLinks.forEach((hideModalLink) => {
        hideModalLink.addEventListener('click', () => {
            modal.classList.add('hide');
        });
    });
    showModalLinks.forEach((showModalLink) => {
        showModalLink.addEventListener('click', () => {
            let speaker = showModalLink.closest('[data-speaker="slide"]');
            if (!speaker) {
                return false;
            }
            modal.querySelector(['[data-modal="name"]']).innerText = speaker.querySelector('[data-speaker="name"]').innerText;
            modal.querySelector(['[data-modal="title"]']).innerText = speaker.querySelector('[data-speaker="title"').innerText;
            modal.querySelector(['[data-modal="photo"]']).src = speaker.querySelector('[data-speaker="photo"]').src;
            modal.querySelector(['[data-modal="biography"]']).innerHTML = speaker.querySelector('[data-speaker="biography"]').innerHTML;
            modal.classList.remove('hide');
        }, { passive: true });
    });
};
