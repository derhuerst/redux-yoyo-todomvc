'use strict'

const selector = require('reselect').createSelector
const yo = require('yo-yo')



const row = (finishTodo, unfinishTodo) => (todo, index) => {
	const onClick = todo.finished
		? () => unfinishTodo(index)
		: () => finishTodo(index)
	return yo `
		<li>
			<input type="checkbox"
				${todo.finished ? 'checked' : ''}
				onclick=${onClick}/>
			<span>${todo.text}</span>
		</li>`
}

const render = (todos, finishTodo, unfinishTodo) => yo `
	<ul>${todos.map(row(finishTodo, unfinishTodo))}</ul>`



const list = (actions) => selector(
	(state) => {
		if (state.filter === 'finished')
			return state.todos.filter((todo) => todo.finished === true)
		if (state.filter === 'unfinished')
			return state.todos.filter((todo) => todo.finished === false)
		return state.todos
	},
	(list) => render(list, actions.finishTodo, actions.unfinishTodo)
)
module.exports = list
