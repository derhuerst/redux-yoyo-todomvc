'use strict'

const createStore = require('redux/lib/createStore').default
const yo = require('yo-yo')

const bindActions = require('./actions')
const reducer = require('./reducer')
const ui = require('./ui/index')



const store = createStore(reducer)
const actions = bindActions(store.dispatch)

const render = ui(actions)
const dom = render(store.getState())
document.body.appendChild(dom)

store.subscribe(() => {
	const state = store.getState()
	yo.update(dom, render(state))
})
