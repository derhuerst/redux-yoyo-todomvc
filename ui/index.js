'use strict'

const selector = require('reselect').createSelector
const yo = require('yo-yo')

const addComponent = require('./add')
const listComponent = require('./list')
const filtersComponent = require('./filters')
const renderCounter = require('./counter')



const ui = (actions) => {
	const renderAdd = addComponent(actions)
	const renderList = listComponent(actions)
	const renderFilters = filtersComponent(actions)
	return (state) => yo `
		<main>
			${renderAdd(state)}
			${renderList(state)}
			${renderFilters(state)}
			${renderCounter(state)}
		</main>`
}

module.exports = ui
