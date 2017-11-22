"use strict";

const pIsPromise = require('p-is-promise')

const LIB = '@promise-utils/any'

function promiseAny() {
	const promises = Array.from(arguments)
	if (promises.length === 0)
		throw new RangeError(`${LIB}: promiseAny(...): should pass at least one promise!`)

	promises.forEach(p => {
		if (!p || !pIsPromise(p))
			throw new TypeError(`${LIB}: promiseAny(...): all args should be promises!`)
	})

	const length = promises.length
	let rejection_count = 0
	return new Promise((resolve, reject) => {
		promises.forEach(p => p.then(resolve, err => {
			rejection_count++
			if (rejection_count >= length) reject(err)
		}))
	})
}

module.exports = {
	promiseAny,
}
