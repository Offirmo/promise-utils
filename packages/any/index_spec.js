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

			it('should follow it - case #1: resolved', async () => {
				const x = await promiseAny(Promise.resolve(1))
				expect(x).to.equal(1)
			})

			it('should follow it - case #2: rejected', () => {
				const x = promiseAny(Promise.reject(new Error('Foo!')))
				return expect(x).to.eventually.be.rejectedWith('Foo!')
			})
		})

		context('when provided with many promises', () => {

			it('should return a resolution if at least one of the promises succeed, whatever its order', async () => {
				const p1 = promiseAny(Promise.reject(new Error('Foo!')))
				const p2 = promiseAny(Promise.resolve(2))

				const x = await promiseAny(p1, p2)
				expect(x).to.equal(2)
			})

			it('should return a resolution as soon as one of the promises succeed', async () => {
				// TODO use sinon
				let car1 = new Promise(resolve => setTimeout(resolve, 200, 'Car 1.'));
				let car2 = new Promise((resolve, reject) => setTimeout(reject, 50, new Error('Crash!')));
				let car3 = new Promise(resolve => setTimeout(resolve, 100, 'Car 3.'));
				let car4 = new Promise(resolve => setTimeout(resolve, 900, 'Car 4.'));
				let car5 = new Promise(resolve => setTimeout(resolve, 800, 'Car 5.'));

				const x = await promiseAny(car1, car2, car3, car4, car5)
				expect(x).to.equal('Car 3.')
			})
		})
	})
})
