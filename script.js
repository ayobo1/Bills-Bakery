document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupInfo = document.getElementById('popup-info');
    const popupImage = document.getElementById('popup-image');
    const closeBtn = document.querySelector('.popup-content .close');

    function showPopup(item) {
        const title = item.querySelector('p').textContent;
        const info = item.getAttribute('data-info');
        const image = item.getAttribute('data-image');

        popupTitle.textContent = title;
        popupInfo.textContent = info;
        popupImage.src = image;

        popup.style.display = 'flex';
    }

    function hidePopup() {
        popup.style.display = 'none';
    }

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            showPopup(item);
        });

        item.addEventListener('touchstart', () => {
            showPopup(item);
        });
    });

    closeBtn.addEventListener('click', hidePopup);

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            hidePopup();
        }
    });



    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const fadeStart = 0;
        const fadeUntil = 200;
        const fadingImage = document.querySelector('.fading-image');

        let opacity = 1;
        let height = 100;

        if (scrollTop <= fadeStart) {
            opacity = 1;
            width = 100;
        } else if (scrollTop <= fadeUntil) {
            opacity = 1 - (scrollTop - fadeStart) / (fadeUntil - fadeStart);
            width = 100 - (80 * (scrollTop - fadeStart) / (fadeUntil - fadeStart));
        } else {
            opacity = 0;
            width = 20;
        }

        fadingImage.style.opacity = opacity;
        fadingImage.style.height = `${height}vh`;
    });
});