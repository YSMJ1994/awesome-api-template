const iconUrl = '//at.alicdn.com/t/font_1507242_wepgfol1j0o.css';
const linkId = '__load_icon';

export function load() {
	let iconLink: HTMLLinkElement | null = document.querySelector(`#${linkId}`);
	if (iconLink) {
		document.head.removeChild(iconLink);
	}
	iconLink = document.createElement('link');
	iconLink.id = linkId;
	iconLink.rel = 'stylesheet';
	iconLink.href = iconUrl;
	document.head.appendChild(iconLink);
}

export default {
	load
};
