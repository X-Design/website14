//! === ADD HEADER STYLES ON SCROLL ===

const headerScroll = () => {
	const headerElement = document.querySelector('.header');
	this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
}
window.addEventListener('scroll', headerScroll);


//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===

const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('#navbar__menu');
const toggleMenu = () => {
	navbarMenu.classList.toggle('active');
};
menuToggler.addEventListener('click', toggleMenu);


// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---

//! === SWIPER ===

//! === SCROLL REVEAL ===