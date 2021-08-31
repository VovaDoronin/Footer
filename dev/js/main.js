const accordions = document.querySelectorAll('.accordion');

const openAccordion = accordion => {
    const accordionContent = accordion.querySelector('.footer__menu-list');
    accordionContent.classList.add('footer__menu-list_active');
    const arrow = accordion.querySelector('.footer-arrow');
    arrow.classList.add('footer-arrow_top');
};

const closeAccordion = accordion => {
    const accordionContent = accordion.querySelector('.footer__menu-list');
    accordionContent.classList.remove('footer__menu-list_active');
    const arrow = accordion.querySelector('.footer-arrow');
    arrow.classList.remove('footer-arrow_top');
};

accordions.forEach((accordion) => {
    const accordionHeading = accordion.querySelector('.accordion__heading');
    const accordionContent = accordion.querySelector('.footer__menu-list');

    accordionHeading.onclick = () => {
        if (accordionContent.classList.contains('footer__menu-list_active')) {
            closeAccordion(accordion);
        } else {
            accordions.forEach((accordion) => {
                closeAccordion(accordion);
            });
            openAccordion(accordion);
        };
    };
});