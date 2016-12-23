var moment = require('moment');
var now = moment();

//console.log(now.format());
//console.log(now.format('X'));
//console.log(now.valueOf());

var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('HH:mm'));

//now.subtract(1, 'year');
//console.log(now.format());

/*console.log(now.format('ZZ'))
var time = now.format('ZZ')/100;
now.subtract(time, 'hour')*/

//console.log(now.format("MMM Do YYYY, HH:mm")); // hh:mmA 02:40PM