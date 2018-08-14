var _masterButton = 'span.js-select-button[title="base: master"]';
var masterButton = document.querySelector(_masterButton);

if (masterButton) {
	masterButton.setAttribute('title', 'base: develop');
	masterButton.innerHTML = 'develop';
}