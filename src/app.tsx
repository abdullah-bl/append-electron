import * as React from 'react'
import ReactDOM from 'react-dom'

function render() {
	ReactDOM.render(
		<h2 className='font-bold'>Hello from React!</h2>,
		document.querySelector('#app')
	)
}

render()
