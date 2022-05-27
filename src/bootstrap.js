import React from 'react'
import ReactDom from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'

import App from './App'


//Mount function to start the app

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    })
    
    if(onNavigate)
        history.listen(onNavigate)
    
    ReactDom.render( <App history={history} />, el )

    return {
        onParentNavigate({ pathname : nextPathname }) {
            const { pathname } = history.location

            if(pathname !== nextPathname)
                history.push(nextPathname)
        }
    }
}

// If we are in isolation or development
// Call mount immediately
console.log(process.env)
if(process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector("#_chageset-mfe");

    if(devRoot) {
        mount(devRoot, { defaultHistory : createBrowserHistory() });
    }
        
}

// We are running through container
// we should export the mount function

export { mount }