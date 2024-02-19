const today = new Date;
const banButton = document.querySelector('#close-banner');
const banner = document.querySelector('#banner');

// console.log(`Today = ${today.getDay()}`);

if (today.getDay() == 0) {
    banner.style.display = 'none';
} else if (today.getDay() > 3) {
    banner.style.display = 'none';
} else {
    banner.style.display = 'flex';
};

banButton.addEventListener('click', () => {
    banner.style.display = 'none';
});