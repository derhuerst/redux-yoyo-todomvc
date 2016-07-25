'use strict'

const combineReducers = require('redux/lib/combineReducers').default



const todosReducer = (todos = [], action) => {
	console.log('action', action)

	if (action.type === 'add-todo')
		return todos.concat([{text: action.text, finished: false}])

	if (action.type === 'finish-todo')
		return todos.map((todo, index) =>
			index === action.index
				? Object.assign({}, todo, {finished: true})
				: todo)

	if (action.type === 'unfinish-todo')
		return todos.map((todo, index) =>
			index === action.index
				? Object.assign({}, todo, {finished: false})
				: todo)

	if (action.type === 'delete-todo')
		return todos.filter((_, index) => index !== action.index)

	return todos
}



const filterReducer = (filter = 'unfinished', action) =>
	action.type === 'set-filter' ? action.filter : filter



module.exports = combineReducers({todos: todosReducer, filter: filterReducer})
