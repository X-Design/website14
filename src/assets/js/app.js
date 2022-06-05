//! === ADD HEADER STYLES ON SCROLL ===

const headerScroll = () => {
	const headerElement = document.querySelector('.header');
	this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
};
window.addEventListener('scroll', headerScroll);


//! === OPEN AND CLOSE THE MENU ON HAMBURGER ICON CLICK ===

const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');
const toggleMenu = () => {
	navbarMenu.classList.toggle('active');
};
menuToggler.addEventListener('click', toggleMenu);


// --- CLOSE MENU WHEN NAV-LINKS ARE CLICKED ---
const linksToggleMenu = (e) => {
	if (e.target.classList.contains('navbar__list-link')) navbarMenu.classList.remove('active');
};
window.addEventListener('click', linksToggleMenu);

//! === SWIPER ===
// //  Initialize Swiper
// let swiper = new Swiper(".myswiper", {
// 	effect: "cube",
// 	grabCursor: true,
// 	cubeEffect: {
// 		shadow: true,
// 		slideShadows: true,
// 		shadowOffset: 20,
// 		shadowScale: 0.94,
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// });



// const swiper = new Swiper(".myswiper", {
// 	effect: 'coverflow',
// 	grabCursor: true,
// 	centeredSlides: true,
// 	slidePerView: 'auto',
// 	coverFlowEffect: {
// 		rotate: 50,
// 		stretch: 0,
// 		depth: 100,
// 		modifier: 1,
// 		slideShadows: true
// 	},
// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// });


//! === SCROLL REVEAL ===