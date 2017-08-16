var animData = {
	wrapper: document.getElementById('bodymovin'),
	animType: 'svg',
	loop: false,
	prerender: true,
	autoplay: false,
	path: 'https://raw.githubusercontent.com/twhitt14/lottie/master/scroll-animation-simple.json'
};

var anim = bodymovin.loadAnimation(animData);

window.addEventListener('scroll', function() {
	var scrollPercent = document.body.scrollTop;
	scrollPercent = document.body.scrollTop / (document.body.scrollHeight - window.innerHeight);
	console.log((100 * scrollPercent) + ' %');

	var frames = anim.totalFrames;
	bodymovin.goToAndStop(scrollPercent * frames, true);
});
