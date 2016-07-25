'use strict'

const bind = require('redux/lib/bindActionCreators').default



const addTodo = (text) =>
	({type: 'add-todo', text})

const finishTodo = (index) =>
	({type: 'finish-todo', index})
const unfinishTodo = (index) =>
	({type: 'unfinish-todo', index})

const deleteTodo = (index) =>
	({type: 'delete-todo', index})

const setFilter = (filter) =>
	({type: 'set-filter', filter})
const showUnfinishedTodos = () => setFilter('unfinished')
const showFinishedTodos = () => setFilter('finished')
const showAllTodos = () => setFilter('all')



module.exports = (dispatch) => bind({
	addTodo,
	finishTodo, unfinishTodo,
	deleteTodo,
	showUnfinishedTodos, showFinishedTodos, showAllTodos
}, dispatch)
