'use strict'

const selector = require('reselect').createSelector
const yo = require('yo-yo')



const add = (add) => {
	const input = yo `<input type="text"/>`
	const onClick = () => {
		add(input.value)
	}
	return yo `
		<div class="new-todo">
			${input}
			<button onclick=${onClick}>add todo</button>
		</div>`
}

const todo = (finishTodo, unfinishTodo) => (todo, index) => {
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

const list = (todos, filter, finishTodo, unfinishTodo) => {
	if (filter === 'finished')
		todos = todos.filter((todo) => todo.finished === true)
	else if (filter === 'unfinished')
		todos = todos.filter((todo) => todo.finished === false)
	return yo `
		<ul class="todos-list">
			${todos.map(todo(finishTodo, unfinishTodo))}
		</ul>`
}

const filterButton = (match) => (filter, onClick) => yo `
	<button
		${filter === match ? 'disabled' : ''}
		onclick=${onClick}>${match}</button>`
const showUnfinished = filterButton('unfinished')
const showFinished = filterButton('finished')
const showAll = filterButton('all')

const counter = (todos) => {
	const count = todos.filter((todo) => todo.finished === false).length
	return yo `<span>${count} left</span>`
}



const ui = (actions) => (state) => yo `
	<main>
		${add(actions.addTodo)}
		${list(state.todos, state.filter, actions.finishTodo, actions.unfinishTodo)}
		${showUnfinished(state.filter, actions.showUnfinishedTodos)}
		${showFinished(state.filter, actions.showFinishedTodos)}
		${showAll(state.filter, actions.showAllTodos)}
		${counter(state.todos)}
	</main>`

module.exports = ui
