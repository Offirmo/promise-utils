"use strict";

const LIB = '@promise-utils/try'

// http://2ality.com/2017/08/promise-try.html#work-arounds
function promiseTry(fn) {
	if (typeof fn !== 'function')
		throw new TypeError(`${LIB}: promiseTry(): argument should be a function!`)

	return Promise.resolve().then(fn)
}

module.exports = {
	promiseTry,
}
