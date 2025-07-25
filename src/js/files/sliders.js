// Підключення функціоналу "Чертоги Фрілансера"
import {isMobile} from "./functions.js";

/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import {Navigation, FreeMode, Autoplay, Pagination, EffectCoverflow, EffectFade } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	if (document.querySelector('.slider-main')) {
		new Swiper('.slider-main', { 
			modules: [FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 800,
			grabCursor: true,
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			// navigation: {
			// 	prevEl: '.slider-main .swiper-button-prev',
			// 	nextEl: '.slider-main .swiper-button-next',
			// },
			breakpoints: {
				300: {
					spaceBetween: 16,
				},
				480: {
					spaceBetween: 24,
				},
				769: {
					spaceBetween: 26,
				},
				1367: {
					spaceBetween: 32,
				},
			},
			on: {

			}
		});
		
	}
	if (document.querySelector('.slider-insights')) {
		// Получаем элемент .slider-insights__wrapper
    var sliderInsightsWrapper = document.querySelector('.slider-insights__wrapper');
		var slider = new Swiper('.slider-insights', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 2500,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
				// disableOnInteraction: false,
				pauseOnMouseEnter: true,
				// waitForTransition: false,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
				// sticky: true,
				// momentumRatio: 0.3,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			loopAdditionalSlides: 5,
			// loopPreventsSliding: true,
			breakpoints: {
				300: {
					spaceBetween: 24,
				},
				1200: {
					spaceBetween: 30,
				},
				1500: {
					spaceBetween: 40,
				},
			},
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			}
		});

	}
	// == page ABOUT.HTML ===========
	if (document.querySelector('.slider-about-a')) {
		new Swiper('.slider-about-a', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 4500,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			breakpoints: {
				300: {
					spaceBetween: 17,
				},
				768: {
					spaceBetween: 19,
				}
			},
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			}
		});
	}
	if (document.querySelector('.slider-about-b')) {
		new Swiper('.slider-about-b', { 
			modules: [ FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 500,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			// autoplay: {
			// 	delay: -1,
			// },
			// freeMode: {
			// 	enabled: true,
			// 	momentumBounce: false,
			// },
			// nested: true,
			loop: true,
			loopAddBlankSlides: true,
			breakpoints: {
				300: {
					spaceBetween: 13,
				},
				768: {
					spaceBetween: 20,
				}
			},
			// on: {
			// 	touchStart: function() {
			// 		this.autoplay.stop();
			// 	},
			// 	touchEnd: function() {
			// 			this.autoplay.start();
			// 	},
			// }
		});
	}
	if (document.querySelector('.slider-about-c')) {
		new Swiper('.slider-about-c', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 4500,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			breakpoints: {
				300: {
					spaceBetween: 23,
				},
				768: {
					spaceBetween: 30,
				}
			},
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			}
		});
	}
	if (document.querySelector('.slider-about-d')) {
		new Swiper('.slider-about-d', { 
			modules: [Autoplay, FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 4500,
			centeredSlides: false,
			longSwipes: true,
			simulateTouch: true,
			grabCursor: true,
			autoplay: {
				delay: -1,
			},
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			loop: true,
			loopAddBlankSlides: true,
			breakpoints: {
				300: {
					spaceBetween: 23,
				},
				768: {
					spaceBetween: 30,
				}
			},
			on: {
				touchStart: function() {
					this.autoplay.stop();
				},
				touchEnd: function() {
						this.autoplay.start();
				},
			}
		});
	}
	if (document.querySelector('.case-page__slider')) {
		new Swiper('.case-page__slider', { 
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 500,
			// autoHeight: true,
			// centeredSlides: false,
			// longSwipes: true,
			// simulateTouch: true,
			// grabCursor: true,
			// nested: true,
			// loop: true,
			// loopAddBlankSlides: true,
			pagination: {
				el: '.case-page__slider .swiper-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				300: {
					spaceBetween: 16,
				},
				768: {
					spaceBetween: 20,
				}
			},
		});
	}
	if (document.querySelector('.case-page__slider-b')) {
		new Swiper('.case-page__slider-b', { 
			modules: [FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			speed: 800,
			// spaceBetween: 20,
			// autoHeight: true,
			// autoHeight: true,
			// centeredSlides: false,
			// longSwipes: true,
			// simulateTouch: true,
			// grabCursor: true,
			// nested: true,
			// loop: true,
			// loopAddBlankSlides: true,
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			// pagination: {
			// 	el: '.case-page__slider-b .swiper-pagination',
			// 	clickable: true,
			// },
			breakpoints: {
				300: {
					spaceBetween: 16,
					slidesPerView: "auto",
					autoHeight: true,
				},
				768: {
					spaceBetween: 20,
					slidesPerView: "auto",
					autoHeight: false,
				}
			},
		});
	}

	// == page SERVICE.HTML ===========
	if (document.querySelector('.nav-serv__slider')) {
		new Swiper('.nav-serv__slider', { 
			modules: [FreeMode],
			observer: true,
			observeParents: true,
			slidesPerView: "auto",
			// speed: 800,
			spaceBetween: 20,
			freeMode: {
				enabled: true,
				momentumBounce: false,
			},
			nested: true,
			on: {
			}
		});
	}
	// == paage OUR-SERVICES.HTML ============
	if (document.querySelector('.our-serv__slider')) {
		new Swiper('.our-serv__slider', { 
			modules: [EffectCoverflow],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			speed: 800,
			spaceBetween: 0,
			direction: 'vertical',
			effect: 'coverflow',
			allowTouchMove: false,
			// coverflowEffect: {
			// 	depth: 200,
			// 	modifier: 2.05,
			// 	rotate: 0,
			// 	stretch: 160,
			// 	// scale: 1,
			// },
			breakpoints: {
				300: {
					coverflowEffect: {
						depth: 100,
						modifier: 1,
						rotate: 0,
						stretch: 320,
					},
				},
				769: {
					coverflowEffect: {
						depth: 100,
						modifier: 10,
						rotate: 0,
						stretch: 40,
					},
				},
				1500.98: {
					coverflowEffect: {
						// depth: 200,
						// modifier: 2.05,
						// rotate: 0,
						// stretch: 160,
						depth: 100,
						modifier: 10,
						rotate: 0,
						stretch: 50,
					},
				}
			},
			on: {
			}
		});
		 // Initialize the observer to switch slides
		 initSlideObserver();
	}
	// == page ARTICLE.HTML ======================
	if (document.querySelector('.article__slider')) {
		new Swiper('.article__slider', { 
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			speed: 800,
			spaceBetween: 20,
			pagination: {
				el: '.article__slider .swiper-pagination',
				clickable: true,
			},
			on: {
			}
		});
	}
	if (document.querySelector('.works__slider')) {
		new Swiper('.works__slider', { 
			modules: [Autoplay, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 2500,
				pauseOnMouseEnter: true,
			},
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
			on: {
			}
		});
	}
		// == page APPROACH.HTML ===========
		if (document.querySelector('.approach__slider')) {
			new Swiper('.approach__slider', { 
				modules: [Autoplay, FreeMode],
				observer: true,
				observeParents: true,
				slidesPerView: "auto",
				speed: 4500,
				centeredSlides: false,
				longSwipes: true,
				simulateTouch: true,
				grabCursor: true,
				autoplay: {
					delay: -1,
				},
				freeMode: {
					enabled: true,
					momentumBounce: false,
				},
				nested: true,
				loop: true,
				loopAddBlankSlides: true,
				// breakpoints: {
				// 	300: {
				// 		// spaceBetween: 50,
				// 	},
				// 	768: {
				// 		// spaceBetween: 60,
				// 	}
				// },
				on: {
					touchStart: function() {
						this.autoplay.stop();
					},
					touchEnd: function() {
							this.autoplay.start();
					},
				}
			});
		}
		
}

// Функция переключения слайдов при появлении єлемента our-serv__item во вьюпорте просмотра. Дополнительно настройки: rootMargin - расстояния сверх и снизу указывают через какой промежуток во вьюпотре будет срабатывать событие
// function initSlideObserver() {
// 	const items = document.querySelectorAll('.our-serv__item');
// 	const swiper = document.querySelector('.our-serv__slider').swiper;

// 	const observerOptions = {
// 			root: null,
// 			rootMargin: `-28% 0px -22% 0px`, // top, right, bottom, left
// 			threshold: 0.6
// 	};

// 	const observer = new IntersectionObserver((entries, observer) => {
// 		entries.forEach(entry => {
// 				const index = Array.from(items).indexOf(entry.target);
// 				if (entry.isIntersecting) {
// 						swiper.slideTo(index);
// 						entry.target.classList.add('_view');
// 				} else {
// 						entry.target.classList.remove('_view');
// 				}
// 		});
// }, observerOptions);

// 	items.forEach(item => observer.observe(item));
// }

// function initSlidersServices() {
// 	const sliders = document.querySelectorAll('.services__slider');
// 	if (sliders.length > 0) {
// 		sliders.forEach((sliderEl) => {
// 			if (sliderEl.classList.contains('swiper-initialized')) return;
	
// 			const swiper = new Swiper(sliderEl, {
// 				modules: [FreeMode],
// 				observer: true,
// 				observeParents: true,
// 				slidesPerView: "auto",
// 				cssMode: true,
// 				speed: 800,
// 				freeMode: {
// 					enabled: true,
// 					momentumBounce: false,
// 				},
// 				nested: true,
// 				breakpoints: {
// 					300: { spaceBetween: 20 },
// 					769: { spaceBetween: 37 },
// 				},
// 				on: {
// 					init: function () {
// 						let translateX = 0;
	
// 						if (sliderEl.classList.contains('slider-1')) {
// 							translateX = -240;
// 						} else if (sliderEl.classList.contains('slider-2')) {
// 							translateX = -195;
// 						} else if (sliderEl.classList.contains('slider-3')) {
// 							translateX = -120;
// 						}
	
// 						if (this.rtlTranslate) {
// 							translateX = -translateX;
// 						}
	
// 						this.wrapperEl.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
// 					},
// 				},
// 			});
	
// 			setTimeout(() => {
// 				swiper.params.cssMode = false;
// 				swiper.wrapperEl.style.scrollBehavior = 'auto';
// 			}, 1000);
// 		});
// 	}

// }
function initSlidersServices() {
	const sliders = document.querySelectorAll('.services__slider');
	const isWideScreen = window.innerWidth >= 1051; // 65.686em

	if (sliders.length > 0) {
		sliders.forEach((sliderEl) => {
			if (sliderEl.classList.contains('swiper-initialized')) return;

			const swiper = new Swiper(sliderEl, {
				modules: [FreeMode],
				observer: true,
				observeParents: true,
				slidesPerView: "auto",
				speed: 500,
				freeMode: {
					enabled: true,
					// momentumBounce: false,
				},
				// nested: true,
				breakpoints: {
					300: { spaceBetween: 20 },
					769: { spaceBetween: 37 },
				},
				on: {
					init: function () {
						if (!isWideScreen) return; // если меньше 1051px — не смещаем

						let translateX = 0;

						if (sliderEl.classList.contains('slider-1')) {
							translateX = -240;
						} else if (sliderEl.classList.contains('slider-2')) {
							translateX = -195;
						} else if (sliderEl.classList.contains('slider-3')) {
							translateX = -120;
						}

						if (this.rtlTranslate) {
							translateX = -translateX;
						}

						this.wrapperEl.style.transform = `translate3d(${translateX}px, 0px, 0px)`;
					},
				},
			});
		});
	}
}



function initSlideObserver() {
	const items = document.querySelectorAll('.our-serv__item');
	const swiper = document.querySelector('.our-serv__slider').swiper;
	const navSlides = document.querySelectorAll('.nav-serv__slide');

  let observerOptions;
        if (window.innerWidth > 480.98) {
            observerOptions = {
                root: null,
                rootMargin: `-28% 0px -22% 0px`, // top, right, bottom, left
                threshold: 0.5
            };
        } else {
            observerOptions = {
                root: null,
                rootMargin: "0px", // top, right, bottom, left
                threshold: 0.6
            };
        }

				const observer = new IntersectionObserver((entries, observer) => {
					entries.forEach(entry => {
							const index = Array.from(items).indexOf(entry.target);
							if (window.innerWidth > 480.98) {
								if (entry.isIntersecting) {
										swiper.slideTo(index);
										entry.target.classList.add('_view');
				
										navSlides.forEach(slide => slide.classList.remove('_active'));
										navSlides[index].classList.add('_active');
						
								} else {
										entry.target.classList.remove('_view');
								}
							}
					});
			}, observerOptions);
			

	items.forEach(item => observer.observe(item));
}



window.addEventListener("load", function (e) {

	initSliders();
initSlidersServices();

// // Инициализация .services__slider с небольшой задержкой
// 	requestAnimationFrame(() => {
// 		setTimeout(() => {
// 			initSlidersServices();
// 		}, 300);
// 	});

// 	// === MutationObserver для отложенных/динамических .services__slider ===
// 	const observer = new MutationObserver(() => {
// 		const uninitializedSliders = Array.from(document.querySelectorAll('.services__slider'))
// 			.filter(slider => !slider.classList.contains('swiper-initialized'));

// 		if (uninitializedSliders.length > 0) {
// 			initSlidersServices();
// 		}
// 	});

// 	observer.observe(document.body, {
// 		childList: true,
// 		subtree: true,
// 	});
	
});

