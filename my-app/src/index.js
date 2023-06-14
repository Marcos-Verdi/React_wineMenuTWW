import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { initialState } from './reducer'
import { StateProvider } from './StateProvider'
import reducer from './reducer'

ReactDOM.render(
                <BrowserRouter>
                    <StateProvider initialState={initialState} reducer={reducer}>
                        <App />
                    </StateProvider>
                </BrowserRouter>, document.getElementById('root'))