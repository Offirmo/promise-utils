"use strict";

const {
    promiseAny,
} = require('.')

describe('Promise.any', () => {

	context('when provided with NO parameters', function() {

		it('should throw', () => {
			function test1() { promiseAny() }

			expect(test1).to.throw('@promise-utils/any: promiseAny(...): should pass at least one promise!')
		})
	})

	context('when provided with wrong parameters', function() {

		it('should throw', () => {
			function test1() { promiseAny(5) }
			function test2() { promiseAny('foo') }

			expect(test1).to.throw('@promise-utils/any: promiseAny(...): all args should be promises!')
			expect(test2).to.throw('@promise-utils/any: promiseAny(...): all args should be promises!')
		})
	})

	context('when provided with correct parameters', function() {

		context('when provided with 1 promise', function() {

			it('should follow it: case #1 resolved', () => {

			})
		})

			it('should always return a promise', () => {
			const out = promiseAny(Promise.resolve(5))
			expect(out).to.have.property('then')
		})

		it('should resolve immediately with the correct result if the return value is not a promise')
		it('should follow the returned promise if any')
		it('should catch synchronous errors and turn them into a promise rejection')
	})
})
