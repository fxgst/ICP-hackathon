import * as React from 'react'
import { render } from 'react-dom'
import routToPage from './router'

export default function HandsOff(props) {

    const auth = props.auth;
    const hackathon = props.canisters.hackathon;
    const token = props.canisters.token;
    const privateKey = props.privateKey;

    let consoleStrs = [];

    const interval = setInterval(loopBody, 1000)

    function printToConsole(str) {
        const handsOffConsole = document.getElementById('hands_off_console')
        consoleStrs.push(str)
        if (consoleStrs.length > 10) {
            consoleStrs.shift()
        }
        let consoleStr = consoleStrs.join('\n')

        handsOffConsole.innerText = consoleStr
    }

    let i = 0;
    async function loopBody() {
        i += 1;
        console.log(i)
        printToConsole(`Number now:${i}`)
    }

    function stop() {
        clearInterval(interval)
        console.log('stop')
        routToPage('Main')
    }


    React.useEffect(async () => {
        // loop()
    }, [])

    return (
    <div className="eventHorizon">
        <h1>Hands-Off Mode</h1>
        <h2>{privateKey}</h2>
        <a id="stop_button" data-text="Stop" onClick={stop} className="rainbow-button" style={{width: 100}}></a>

        <p id='hands_off_console' style={{'whiteSpace': 'pre-wrap'}}></p>
    </div>
    )
}