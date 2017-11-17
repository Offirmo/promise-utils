# promise-utils
A monorepo of small npm modules for working with the javascript promises.

The idea is to group together all the promise related utilities.

Design principles:
* isomorphic code
* good API, early checks
* don't add extra, dangerous complexity (see https://github.com/sindresorhus/clean-stack/issues/4)
* (maybe) good JS/npm citizen, exporting ES7
* (maybe) support TypeScript / flow

This repo relies on Sindre Sorhus existing npm modules when available and convenient.
