const openWindow = (selector) => {
	const obj = document.querySelectorAll(selector);
	obj.forEach(item => {
		let hint;
		item.addEventListener('mouseover', () => {
			hint = window.open(item.dataset.hint, 'examp', 'width=600,height=300px');
		});

		item.addEventListener('mouseleave', () => {
			hint.close();
		});
	});


};

openWindow('area');