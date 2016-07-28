'use strict'

const selector = require('reselect').createSelector
const yo = require('yo-yo')

const Add = require('./add')
const List = require('./list')
const Filters = require('./filters')
const counter = require('./counter')



const ui = (actions) => {
	const add = Add(actions)
	const list = List(actions)
	const filters = Filters(actions)
	return (state) => yo `
		<main>
			${add(state)}
			${list(state)}
			${filters(state)}
			${counter(state)}
		</main>`
}

module.exports = ui
