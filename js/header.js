// Toggle Menu
const topMenu = document.getElementById('ct-menu');
const toggleMenu = document.getElementById('ct-toggle-menu-item');
const cancelMenu = document.getElementById('ct-cancel-menu-item');
const menuItem = document.querySelectorAll('.ct-menu-item');

document.addEventListener('click', (e) => {
    if (toggleMenu.contains(e.target)) {
        toggleMenu.classList.add('hidden');

        topMenu.classList.toggle('hidden');
        topMenu.classList.add('ct-menu-expanded-slideDown');

        cancelMenu.classList.remove('hidden');
        cancelMenu.classList.add('flex');
    } else if (cancelMenu.contains(e.target)) {
        toggleMenu.classList.remove('hidden');
        toggleMenu.classList.add('flex');

        topMenu.classList.remove('ct-menu-expanded-slideDown');
        topMenu.classList.add('hidden');

        cancelMenu.classList.remove('flex');
        cancelMenu.classList.add('hidden');
    } else {
        // click outside from toggle top menu icon
        if (topMenu.classList.contains('ct-menu-expanded-slideDown')) {
            topMenu.classList.remove('ct-menu-expanded-slideDown');
            topMenu.classList.add('hidden');

            toggleMenu.classList.toggle('hidden');

            cancelMenu.classList.remove('flex');
            cancelMenu.classList.add('hidden');
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        if (topMenu.classList.contains('ct-menu-expanded-slideDown')) {
            topMenu.classList.add('hidden');
            topMenu.classList.toggle('ct-menu-expanded-slideDown');

            toggleMenu.classList.toggle('hidden');

            cancelMenu.classList.remove('flex');
            cancelMenu.classList.add('hidden');
        }
    }
});

// Active Menu
menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('ct-menu-item-active');
    });
});

function removeActive() {
    menuItem.forEach((item) => {
        item.classList.remove('ct-menu-item-active');
    });
}
