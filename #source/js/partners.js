// ============= ТАБЫ И СЛАЙДЕР ПАРТНЁРОВ ====================

(function($) {
	$(function() {
		$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
			$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
		});
	});
})(jQuery);
const sliders = document.querySelectorAll('.partners__slider');
sliders.forEach(function(el) {
	const swiper = new Swiper(el, {
		dragable: false,
		loop: false,
		slidesPerGroup: 3,
		spaceBetween: 0,
		speed: 800,
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		navigation: {
			nextEl: el.querySelector('.swiper-button-next'),
			prevEl: el.querySelector('.swiper-button-prev'),
		},
		pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
		breakpoints: {
			320: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				grid: {
					rows: 2,
				},
			},
			768: {
				slidesPerView: 3,
				grid: {
					rows: 2,
				},
			},
			1400: {
				slidesPerView: 6,
				grid: {
					rows: 2,
				},
			},
		},
	});
});
