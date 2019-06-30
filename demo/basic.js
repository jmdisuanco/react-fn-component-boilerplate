import React from 'react'
import BoilerPlate from '../src'
const {App, Components} = BoilerPlate
const {Display,ControlPad} = Components

const Basic = ()=>{
    const uState= 0
    return(
        <App  uState={uState}>
            <Display/>
            <ControlPad/>
        </App>
    )
}

export default Basic