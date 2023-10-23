import React from 'react'
import ReactDOM from 'react-dom/client'
import './plugins/i18n'
import App from './App'
import './assets/scss/index.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
