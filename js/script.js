window.onload = function () {

	var btns = document.querySelector('.btns');

	var btnsFront = btns.querySelector('.btns-front'),
		btnsYes = btns.querySelector('.btns-back .yes'),
		btnsNo = btns.querySelector('.btns-back .no');

	btnsFront.addEventListener('click', function (event) {
		var mx = event.clientX - btns.offsetLeft,
			my = event.clientY - btns.offsetTop;

		var w = btns.offsetWidth,
			h = btns.offsetHeight;

		var directions = [{
				id: 'top',
				x: w / 2,
				y: 0
			},
			{
				id: 'right',
				x: w,
				y: h / 2
			},
			{
				id: 'bottom',
				x: w / 2,
				y: h
			},
			{
				id: 'left',
				x: 0,
				y: h / 2
			}
		];

		directions.sort(function (a, b) {
			return distance(mx, my, a.x, a.y) - distance(mx, my, b.x, b.y);
		});

		btns.setAttribute('data-direction', directions.shift().id);
		btns.classList.add('is-open');

	});

	btnsYes.addEventListener('click', function (event) {
		btns.classList.remove('is-open');
	});

	btnsNo.addEventListener('click', function (event) {
		btns.classList.remove('is-open');
	});

	function distance(x1, y1, x2, y2) {
		var dx = x1 - x2;
		var dy = y1 - y2;
		return Math.sqrt(dx * dx + dy * dy);
	}

};