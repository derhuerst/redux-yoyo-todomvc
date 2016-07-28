'use strict'

const selector = require('reselect').createSelector
const yo = require('yo-yo')



const filterButton = (match) => (disabled, onClick) => yo `
	<button ${disabled ? 'disabled' : ''}
		onclick=${onClick}>${match}</button>`

const unfinishedButton = filterButton('unfinished')
const finishedButton = filterButton('finished')
const allButton = filterButton('all')



const list = (actions) => {
	const showUnfinished = selector(
		  (state) => state.filter === 'unfinished'
		, (disabled) => unfinishedButton(disabled, actions.showUnfinishedTodos)
	)
	const showFinished = selector(
		  (state) => state.filter === 'finished'
		, (disabled) => finishedButton(disabled, actions.showFinishedTodos)
	)
	const showAll = selector(
		  (state) => state.filter === 'all'
		, (disabled) => allButton(disabled, actions.showAllTodos)
	)
	return (state) => yo `
		<div>
			${showUnfinished(state)}
			${showFinished(state)}
			${showAll(state)}
		</div>`
}
module.exports = list
