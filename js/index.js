//  $(window).load(function(){

//  	$('.cards').masonry({
//  		itemSelector       : '.card',
//  		transitionDuration : 0
//  	});
//  });

(function ($) {
	'use strict';

	var $body = $('body'),
		$header = $('header'),
		$hero = $('.hero'),
		// $menuTrigger = $('.menu'),
		menuHeight = $('.top-bar').height(),
		$triggers = $('nav [href^="#"]'),
		$scrollItems = $triggers.map(function () {
			return $($(this).attr('href'));
		}),
		lastId;

	$(window)
		.scroll(function () {
			// Handle active menu links
			var pageTop = $(this).scrollTop(),
				fromTop = pageTop + menuHeight + 50,
				mql = window.matchMedia("(max-width:200000px)"),
				currentElement = $scrollItems.map(function () {
					if ($(this).offset().top < fromTop) {
						return this;
					}
				}),
				id;

			currentElement = currentElement[currentElement.length - 1];
			id = currentElement && currentElement.length ? '#' + currentElement[0].id : $triggers.first().attr('href');

			if (lastId !== id) {
				lastId = id;

				$triggers.removeClass('active');
				$('[href=' + id + ']').addClass('active');
			}


			if (mql.matches) {
				$header.removeClass('menuHidden');
				$body.toggleClass('collapsed', pageTop >= 0);
				$hero.toggleClass('sticky', pageTop > 133);
			} else {
				$header.toggleClass('menuHidden', pageTop < menuHeight);
				$body.toggleClass('collapsed', pageTop > menuHeight);
				$hero.toggleClass('sticky', pageTop > 333);
			}
		})
		.resize(function () {
			$(this).trigger('scroll');
		})
		.trigger('scroll');


	// Manually trigger menu visibility
	// $menuTrigger.on('click', function () {
	// 	$body.toggleClass('collapsed');
	// });


	// Navigation
	// $('[href^="#"]').on('click', function (e) {
	// 	e.preventDefault();
	// 	$('html,body').animate({
	// 		scrollTop : $($(this).attr('href')).offset().top - menuHeight - 44
	// 	}, 250);
	// });



	// Contact form
	// function validateEmail(email) { return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(email); }
	// function validateField(val){ return val.length > 0; }
	// function validate($field){
	// 	var $ct = $field.parent(),
	// 		val = $field.val();

	// 	val.length ? $ct.addClass('completed') : $ct.removeClass('completed');

	// 	if($field.is('[required]')){
	// 		var isValid = $field.is('[type="email"]') ? validateEmail(val) : validateField(val);
	// 		$ct.attr("data-isvalid", isValid);
	// 	} else {
	// 		val.length ? $ct.attr("data-isvalid", "true") : $ct.removeAttr("data-isvalid");
	// 	}
	// }

	// $('input,textarea').on('blur change input', function () {
	// 	validate($(this));
	// });

	// $('form.contact').on('submit', function(e){
	// 	e.preventDefault();

	// 	var $form = $(this),
	// 	    $submit = $('#submitform');

	// 	$('.message').removeClass('shown');

	// 	$.each($('input,textarea'), function(){
	// 		validate($(this));
	// 	});

	// 	if($('[data-isvalid="false"]').length){
	// 		$('html,body').animate({
	// 			scrollTop : $('[data-isvalid="false"]').first().offset().top - 150
	// 		}, 250);

	// 		return false;
	// 	}

	// 	$submit.prop('disabled', true);

	// 	$.ajax({
	// 		method : "POST",
	// 		url    : "http://codrin.eu/utils/sendmail.php",
	// 		data   : {
	// 			first_name   : $('[name=first_name]').val(), 
	// 			last_name    : $('[name=last_name]').val(),
	// 			email        : $('[name=email]').val(),
	// 			company_name : $('[name=company_name]').val(),
	// 			message      : $('[name=message]').val()
	// 		}
	// 	})
	// 	.done(function( msg ) {
	// 		setTimeout(function(){
	// 			$submit.prop('disabled', false);
	// 			if(msg == 1){
	// 				$form[0].reset();
	// 				$('.field').removeClass('completed').removeAttr('data-isvalid');
	// 				$('.message_success').addClass('shown');
	// 			} else {
	// 				$('.message_error').addClass('shown');
	// 			}
	// 		}, 2000);
	// 	});
	// });
})(jQuery);














/***********************Particles*************/

particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 120,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#E52E2D"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function () {
	stats.begin();
	stats.end();
	if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
		count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
	}
	requestAnimationFrame(update);
};
requestAnimationFrame(update);;