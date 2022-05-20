import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

function mount(el){
    ReactDOM.render(<App/>, el)
}

if(process.env.NODE_ENV=='development'){
  const el =  document.querySelector("#_dev-auth")
  if(el){
    mount(el)
  }
}

export {mount}