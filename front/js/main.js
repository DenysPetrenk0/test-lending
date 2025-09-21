document.querySelectorAll('details.faq__drop-menu').forEach((targetDetail) => {
    targetDetail.addEventListener('toggle', () => {
        if (targetDetail.open) {
            document.querySelectorAll('details.faq__drop-menu').forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute('open');
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('[data-menu-button]');
    const menu    = document.querySelector('[data-menu]');

    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('is-open');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal  = document.querySelector('[data-modal]');
    const main   = document.querySelector('main');
    const btnYes = document.querySelector('[data-menu-age="true"]');
    const btnNo  = document.querySelector('[data-menu-age="false"]');
    const body  = document.querySelector('body');

    const ageStatus = localStorage.getItem('ageStatus');

    if (ageStatus === 'true') {
        if (modal) modal.style.display = 'none';
        body.style.overflow = 'auto';
    } else if (ageStatus === 'false') {
        if (modal) modal.style.display = 'none';
        body.style.overflow = 'auto';
        main.innerHTML = main.innerHTML = '<div class="no-access"><p class="no-access__text">Vous ne remplissez pas les critères d’âge requis pour accéder à ce site. L’accès est exclusivement réservé aux personnes majeures (18+). Merci de votre compréhension.</p></div>';
    }
    if (modal) {
        btnYes.addEventListener('click', () => {
            modal.style.display = 'none';
            body.style.overflow = 'auto';
            localStorage.setItem('ageStatus', 'true');
        });

        btnNo.addEventListener('click', () => {
            modal.style.display = 'none';
            main.innerHTML = '<div class="no-access"><p class="no-access__text">Vous ne remplissez pas les critères d’âge requis pour accéder à ce site. L’accès est exclusivement réservé aux personnes majeures (18+). Merci de votre compréhension.</p></div>';
            body.style.overflow = 'auto';
            localStorage.setItem('ageStatus', 'false');
        });
    }
});