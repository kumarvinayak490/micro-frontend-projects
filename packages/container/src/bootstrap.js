import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

function mount(el){
    ReactDOM.render(<App/>, el)
}

mount(document.querySelector('#container'))