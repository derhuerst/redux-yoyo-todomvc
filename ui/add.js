'use strict'

const selector = require('reselect').createSelector
const yo = require('yo-yo')



const render = (addTodo) => {
	const input = yo `<input id="${Math.random()}" type="text"/>`
	const onClick = () => addTodo(input.value)
	return yo `
		<div>
			${input}
			<button onclick=${onClick}>add todo</button>
		</div>`
}

const add = (actions) => () => render(actions.addTodo)
module.exports = add
