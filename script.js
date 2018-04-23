const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first image opacity
imgs[0].style.opacity = opacity;

// imgs.forEach(img => 
// 	img.addEventListener('click', (e) => current.src = e.target.src))imgClick())
// );

imgs.forEach(img =>
	img.addEventListener('click', imgClick)
);

function imgClick(e) {
	// Reset opacity of all images
	imgs.forEach(img => (img.style.opacity = 1));

	// Change current image to src of clicked image
	current.src = e.target.src;

	// Add fade-in class
	current.classList.add('fade-in');

	// Remove fade-in class
	setTimeout(() => current.classList.remove('fade-in'), 500);

	// Change opacity to opacity of variable
	e.target.style.opacity = opacity;
};