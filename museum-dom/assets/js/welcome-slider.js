const prev = document.querySelector('.btn-prev');
const next = document.querySelector('.btn-next');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slide-pagination');
const numberOfSlider = document.querySelector('.number-of-slider');

let indexOfSlide = 0;
let isEnabled = true;

const nextSlide = () => {
	hideSlide('to-left');
	indexOfSlide == slides.length - 1 ? indexOfSlide = 0 : indexOfSlide++;
	changeCurrentSlide(indexOfSlide);
	showSlide('from-right');
}

const prevSlide = () => {
	hideSlide('to-right');
	indexOfSlide == 0 ? indexOfSlide = slides.length - 1 : indexOfSlide--;
	changeCurrentSlide(indexOfSlide);
	showSlide('from-left');
}

function hideSlide(direction) {
	isEnabled = false;
	slides[indexOfSlide].classList.add(direction);
	slides[indexOfSlide].addEventListener('animationend', function() {
		this.classList.remove('slide-active', direction);
	});
}

function showSlide(direction) {
	slides[indexOfSlide].classList.add('slide-next', direction);
	slides[indexOfSlide].addEventListener('animationend', function() {
		this.classList.remove('slide-next', direction);
		this.classList.add('slide-active');
		isEnabled = true;
	});
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click',() => {
		if (indexDot < indexOfSlide) {
			hideSlide('to-right');
			indexOfSlide = indexDot;
			changeCurrentSlide(indexOfSlide);
			showSlide('from-left');
		} else {
			hideSlide('to-left');
			indexOfSlide = indexDot;
			changeCurrentSlide(indexOfSlide);
			showSlide('from-right');
		}
	})
})

const activeDot = n => {
	for(dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const changeCurrentSlide = ind => {
	activeDot(indexOfSlide);
	numberOfSlider.innerHTML = `0${indexOfSlide + 1}`;
}


next.addEventListener('click', function() {
	if (isEnabled) {
		nextSlide();
	}
} );

prev.addEventListener('click', function() {
	if (isEnabled) {
		prevSlide();
	}	
});

function swipeDetect (el){

	let surface = el;
	let startPosX = 0;
	let endPosX = 0;
	let startPosY = 0;
	let endPosY = 0;
	let dist = 0;

	let threshold = 20;
	let restraint = 20;
	let allowedTime = 300;

	surface.addEventListener('touchstart',function(e) {
		let touchObj = e.changedTouches[0];
		startPosX = touchObj.pageX;
		startPosY = touchObj.pageY;
		e.preventDefault();
	});

	surface.addEventListener('touchmove',function(e) {
		e.preventDefault();
	});

	surface.addEventListener('touchend',function(e) {
		let touchObj = e.changedTouches[0];
		endPosX  = touchObj.pageX - startPosX;
		endPosY  = touchObj.pageY - startPosY;
		
		if (Math.abs(endPosX) >= threshold && Math.abs(endPosY) <= restraint) {
			if (endPosX < 0) {
				if (isEnabled) {
					prevSlide();
				}
 			  } else {
				if (isEnabled) {
					nextSlide();
				}
			  } 
		}
		e.preventDefault();
	});
	
	surface.addEventListener('mousedown',function(e) {
		dist = 0;
		startPosX = e.pageX;
		startPosY = e.pageY;
		e.preventDefault();
	});


	surface.addEventListener('mouseup',function(e) {
		endPosX  = e.pageX - startPosX;
		endPosY  = e.pageY - startPosY;
		
		if (Math.abs(endPosX) >= threshold && Math.abs(endPosY) <= restraint) {
			if (endPosX < 0) {
				if (isEnabled) {
					prevSlide();
				}
 			  } else {
				if (isEnabled) {
					nextSlide();
				}
			  } 
		}
	   e.preventDefault();
	});
	
}

let el = document.querySelector('.slider-pic')
swipeDetect(el);
