/*
var _masterButton = 'span.js-select-button[title="base: master"]';
var masterButton = document.querySelector(_masterButton);

if (masterButton) {
	masterButton.setAttribute('title', 'base: develop');
	masterButton.innerHTML = 'develop';
}
*/

var _recentBranches = '.RecentBranches';
var $recentBranches = $(_recentBranches);

if ($recentBranches && $recentBranches.length > 0) {
    var links = $recentBranches.find('a');

    for (var a = 0; a <= links.length; a++) {
        var $link = $(links[a]);
        if ($link.attr('href') && $link.attr('href').indexOf('master...')) {
            $link.attr('href', $link.attr('href').replace('master...', 'develop...'));
        }
    }
}