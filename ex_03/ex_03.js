// les deux exo ex_03 et ex_03bis sont fait en 1 seule //

document.addEventListener('DOMContentLoaded', () => {
    const tooltipContents = {
        '#image-element': 'Pure CSS!',
        '#button-element': 'Pure CSS!',
        '#square-element': 'Pure CSS!',
        '#sound-element': 'Pure CSS!',
        '#video-element': 'Pure CSS!'

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
