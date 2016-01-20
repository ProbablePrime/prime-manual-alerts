'use strict';
var $bundle = $('body');
var $panel = $('body');
var $type = document.getElementById('type');
var $name = document.getElementById('name');
var $amount = document.getElementById('tip');
var $months = document.getElementById('months');

var $send = document.getElementById('send');

$send.addEventListener('click',go);
function go() {
    var name = $name.value;
    var type = $type.selected;

    var amount = $amount.value;

    var months = $months.value;

    if (type === 'subscription') {
        nodecg.sendMessage('subscription', {
            name: name,
            ts:Date.now(),
            months:months
        });
    } else if (type === 'follow') {
        nodecg.sendMessage('follow', {
            name: name,
            ts:Date.now()
        });
    } else if (type === 'tip') {
        //We default to Dollars to make the interface easier to manage,
        //These are for test notifications afterall
        nodecg.sendMessage('tip', {
            name: name,
            ts:Date.now(),
            amount:amount,
            currencySymbol:'$'
        });
    }
}
