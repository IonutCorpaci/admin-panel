document.addEventListener("DOMContentLoaded", () => {
    const menuSidebar = document.querySelector('.sidebar'),
        body = document.querySelector('body');

    const toggleMenu = (menu) => {
        const isHidden = menu.classList.contains('-translate-x-full');
        menu.classList.toggle('-translate-x-full', !isHidden);
        body.classList.toggle('overflow-hidden', isHidden);
    };

    const toggleMenuItem = (item) => {
        const subMenu = item.querySelector('ul');
        if (subMenu) {
            subMenu.classList.toggle('hidden');
            item.querySelector('a').classList.toggle('menu-item--active');
        }
    };

    const addArrowIcon = (item) => {
        const subMenu = item.querySelector('ul');
        if (subMenu && !item.querySelector('.icon-menu-right-arrow')) {
            const arrowIcon = document.createElement('span');
            arrowIcon.classList.add('icon-menu-right-arrow', 'ml-auto');
            item.querySelector('a').appendChild(arrowIcon);
        }
    };

    // Добавляем иконки стрелок сразу при загрузке страницы
    document.querySelectorAll('.main-menu__item').forEach(item => {
        addArrowIcon(item);
    });

    document.querySelector('.close-open-btn').addEventListener('click', () => toggleMenu(menuSidebar));
    document.querySelector('.close-btn').addEventListener('click', () => toggleMenu(menuSidebar));

    // Делегирование событий для меню
    menuSidebar.addEventListener('click', (event) => {
        const item = event.target.closest('.main-menu__item');
        if (item) {
            event.preventDefault();
            toggleMenuItem(item);
        }
    });
});
