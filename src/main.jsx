import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { store } from './store/store.js'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp'
import { TodosApp } from './TodosApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      {/* <App /> */}
      {/* <PokemonApp /> */}
      <TodosApp />
    </Provider>
  </React.StrictMode>
)
