"use strict";

const LIB = '@promise-utils/any'

function promiseAny(...promises) {
	if (promises.length === 0)
		throw new RangeError(`${LIB}: promiseAny(...): should pass at least one promise!`)

	promises.forEach(p => {
		if (!p || typeof (p.then) !== 'function')
			throw new TypeError(`${LIB}: promiseAny(...): all args should be promises!`)
	})

	return Promise.resolve((resolve, reject) => {
		promises.forEach(p => p.then(resolve, reject))
	})
}

module.exports = {
	promiseAny,
}
