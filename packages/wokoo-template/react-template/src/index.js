import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const wokooApp = document.createElement('div')
wokooApp.id = 'wokooApp-<%=projectName%>-<%=randomNumber%>'
document.body.appendChild(wokooApp)
ReactDOM.render(<App />, wokooApp)
