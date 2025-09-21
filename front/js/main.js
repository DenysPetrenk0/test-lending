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