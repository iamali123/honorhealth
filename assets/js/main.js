
var linkClick = true;
(function ($) {
	$(function () {
		$('.tab .inner-tab').on('click', function () {
			$(this).parent().toggleClass('active');
		});
		$('.mob-dropdown').on('click', function () {
			$(this).next().slideToggle();
		});
		$('.nav-items a[href^="#"]').on('click', function (e) {
			linkClick = false;
			e.preventDefault();

			$('.nav-items a').each(function () {
				$(this).parent().removeClass('active-link');
			})
			$(this).parent().addClass('active-link');

			var target = this.hash,
				menu = target;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top - $('header').outerHeight()
			}, 500, 'swing');
			setTimeout(function(){
				linkClick = true;
			}, 1500)
		});
		var link = {'1': 'https://honorhealth.typeform.com/to/rvpcJ3iJ',
			'2': 'https://honorhealth.typeform.com/to/lO96F2rg',
			'3': 'https://honorhealth.typeform.com/to/AGwfdC1t',
			'4': 'https://honorhealth.typeform.com/to/n2qoxvh9'};
		var d = new Date();
		var dayName = d.getDay();
		$('#swap-link').attr('href', link[dayName])
		var cards = new Swiper('.cards-blocks ', {
			resistance: true,
			resistanceRatio: 0,
			slidesPerView: 'auto',
			spaceBetween: 0,
		});
		var videoslider = new Swiper('.slider-wrapper', {
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 0,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}
		});
	});
}(jQuery));
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll(".scroll-div");

let lastId;
let cur = [];

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this Pen dependency-free.

window.addEventListener("scroll", event => {
	if(linkClick == true){
		let fromTop = window.scrollY;

		mainNavLinks.forEach(link => {
			let section = document.querySelector(link.hash);

			if (
				section.offsetTop <= fromTop + $('header').outerHeight() &&
				section.offsetTop + section.offsetHeight > fromTop + $('header').outerHeight()
			) {
				link.parentNode.classList.add("active-link");
				$('.mob-dropdown').html(link.innerHTML);
			} else {
				link.parentNode.classList.remove("active-link");
			}
		});
	}
});