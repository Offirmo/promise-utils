"use strict";

const {
    promiseTry,
} = require('.')

describe('Promise.try ponyfill', () => {

	context('when provided with wrong parameters', function() {

		it('should throw', () => {
			function test1() { promiseTry(5) }
			function test2() { promiseTry('foo') }
			function test3() { promiseTry() }

			expect(test1).to.throw('@promise-utils/try: promiseTry(): argument should be a function!')
			expect(test2).to.throw('@promise-utils/try: promiseTry(): argument should be a function!')
			expect(test3).to.throw('@promise-utils/try: promiseTry(): argument should be a function!')
		})
	})

	context('when provided with correct parameters', function() {

		it('should always return a promise', () => {
			const out = promiseTry(() => {})
			expect(out).to.have.property('then')
		})

		it('should resolve immediately with the correct result if the return value is not a promise')
		it('should follow the returned promise if any')
		it('should catch synchronous errors and turn them into a promise rejection')
	})
})
