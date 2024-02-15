/**
 * Eventbrite Modals.
 */
export const eventbriteModal = () => {
    /* Get Eventbrite Modal Config */
    const getConfig = (elementId) => {
        return {
            widgetType: 'checkout',
            eventId: '818323175647',
            modal: true,
            modalTriggerElementId: elementId
        };
    };
    /* Hero Register Button */
    window.EBWidgets.createWidget(getConfig('hero-register-button'));
    /* Navbar Register Button */
    window.EBWidgets.createWidget(getConfig('navbar-register-button'));
    /* Early Bird Book Now Button */
    window.EBWidgets.createWidget(getConfig('early-bird-book-now-button'));
    /* Regular Book Now Button */
    window.EBWidgets.createWidget(getConfig('regular-book-now-button'));
    /* Seminary Student Book Now Button */
    window.EBWidgets.createWidget(getConfig('seminary-student-book-now-button'));
    /* Concert Book Now Button */
    window.EBWidgets.createWidget(getConfig('concert-book-now-button'));
};
