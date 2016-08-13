'use strict'

const selector = require('reselect').createSelector
const yo = require('yo-yo')



const row = (finishTodo, unfinishTodo, removeTodo) => (todo, index) => {
	const toggle = todo.finished
		? () => unfinishTodo(index)
		: () => finishTodo(index)
	const remove = () => removeTodo(index)
	return yo `
		<li>
			<input type="checkbox"
				${todo.finished ? 'checked' : ''}
				onclick=${toggle}/>
			<span>${todo.text}</span>
			<button onclick=${remove}>remove</button>
		</li>`
}

const render = (todos, finish, unfinish, remove) => yo `
	<ul>${todos.map(row(finish, unfinish, remove))}</ul>`



const list = (actions) => selector(
	(state) => {
		if (state.filter === 'finished')
			return state.todos.filter((todo) => todo.finished === true)
		if (state.filter === 'unfinished')
			return state.todos.filter((todo) => todo.finished === false)
		return state.todos
	},
	(list) => render(list, actions.finishTodo, actions.unfinishTodo, actions.removeTodo)
)
module.exports = list
