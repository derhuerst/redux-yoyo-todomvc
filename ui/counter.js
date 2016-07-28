'use strict'

const selector = require('reselect').createSelector
const yo = require('yo-yo')



const counter = selector(
	  (state) => state.todos.filter((todo) => todo.finished === false).length
	, (count) => yo `<span>${count} left</span>`
)

module.exports = counter
