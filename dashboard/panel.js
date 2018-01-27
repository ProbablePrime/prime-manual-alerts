const $type = document.getElementById('type');
const $name = document.getElementById('name');
const $amount = document.getElementById('tip');
const $months = document.getElementById('months');

const $send = document.getElementById('send');

function go() {
	const username = $name.value;
	const type = $type.selected;
	const months = $months.value;

	const extra = {};

	if (type === 'subscription') {
		extra.months = $months.value;
	}

	if (type === 'tip') {
		// We default to Dollars to make the interface easier to manage,
		// These are for test notifications after all
		extra.amount = $amount.value;
		extra.currencySymbol = '$';
	}
	sendEvent(type, username, extra);
}

function sendEvent(type, username, extra) {
	nodecg.sendMessage(type, {
		username,
		type,
		ts: Date.now(),
		...extra
	})
}

$send.addEventListener('click',go);
