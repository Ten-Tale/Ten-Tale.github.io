const fullSize = (selector) => {
	const img = document.querySelector(selector);
	const hidden = document.querySelector('.full-size');

	img.addEventListener('click', () => {
		hidden.style.display = "block";
		document.querySelector('body').style.overflow = "hidden";
		console.dir(document.querySelector('body'));
	});

	hidden.addEventListener('click', () => {
		hidden.style.display = 'none';
		document.querySelector('body').style.overflow = 'auto';
	});
};

fullSize('.sight__img');