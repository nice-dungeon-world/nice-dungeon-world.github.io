---
---


/*
Copied from https://github.com/derekkedziora/jekyll-demo/blob/master/scripts/mode-switcher.js
https://github.com/derekkedziora/jekyll-demo
Creative Commons Attribution 4.0 International License
*/

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');

const iconSun = "{{ site.baseurl }}" ? "{{ site.baseurl }}/assets/img/sun.svg" : "/assets/img/sun.svg";
const iconMoon = "{{ site.baseurl }}" ? "{{ site.baseurl }}/assets/img/moon.svg" : "/assets/img/moon.svg";


function changeIconImgSrc(src) {
	if (document.getElementById("theme-toggle-img")) {
		document.getElementById("theme-toggle-img").src = src;

	} else if (document.getElementById("theme-toggle-img--mobile")) {
		document.getElementById("theme-toggle-img--mobile").src = src;
	}
}

if (systemInitiatedDark.matches) {
	changeIconImgSrc(iconMoon);
} else {
	changeIconImgSrc(iconSun);
}

function prefersColorTest(systemInitiatedDark) {
	if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'dark');
		changeIconImgSrc(iconMoon);
		sessionStorage.setItem('theme', '');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		changeIconImgSrc(iconSun);
		sessionStorage.setItem('theme', '');
	}
}
systemInitiatedDark.addListener(prefersColorTest);


function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		changeIconImgSrc(iconSun);
	} else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		changeIconImgSrc(iconMoon);
	} else if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		changeIconImgSrc(iconSun);
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		changeIconImgSrc(iconMoon);
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	changeIconImgSrc(iconMoon);
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	changeIconImgSrc(iconSun);
}
