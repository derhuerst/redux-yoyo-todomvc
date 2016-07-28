'use strict'

const createStore = require('redux/lib/createStore').default
const bind = require('redux/lib/bindActionCreators').bindActionCreators
const yo = require('yo-yo')

const bindActions = require('./actions')
const reducer = require('./reducer')
const ui = require('./ui/index')



const store = createStore(reducer)
const actions = bindActions(store.dispatch)

const render = ui(actions)
const dom = document.body.appendChild(render(store.getState()))

store.subscribe(() => {
	const state = store.getState()
	console.log('state', state)
	yo.update(dom, render(state))
})
