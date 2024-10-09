// les deux exo ex_03 et ex_03bis sont fait en 1 seule //

document.addEventListener('DOMContentLoaded', () => {
    const tooltipContents = {
        '#button-element': 'Pure CSS!',

    };

    Object.entries(tooltipContents).forEach(([selector, content]) => {
        tippy(selector, {
            content: content,
            animation: 'scale',
            theme: 'custom',
            trigger: 'click',
            onShow(instance) {
                setTimeout(() => {
                    instance.hide();
                }, 2000);
            }
        });
    });
});