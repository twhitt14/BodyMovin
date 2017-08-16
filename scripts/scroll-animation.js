var animData = {
	wrapper: document.getElementById('bodymovin'),
	animType: 'svg',
	loop: false,
	prerender: true,
	autoplay: false,
	path: 'https://raw.githubusercontent.com/twhitt14/BodyMovin/master/animations/scroll-animation-simple.json'
};

var anim = bodymovin.loadAnimation(animData);

anim.addEventListener('data_ready', function() {
	console.log('data_ready');
	setAnimationProgress();
});

window.addEventListener('scroll', function() {
	setAnimationProgress();
});

function setAnimationProgress() {
	var scrollPercent = document.body.scrollTop;
	scrollPercent = document.body.scrollTop / (document.body.scrollHeight - window.innerHeight);
	console.log((100 * scrollPercent) + ' %');

	var frames = anim.totalFrames;
	bodymovin.goToAndStop(scrollPercent * frames, true);
};
