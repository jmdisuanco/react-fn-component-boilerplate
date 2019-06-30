import React from 'react'
import BoilerPlate from '../src'
const {App, Components} = BoilerPlate
const {Display, ControlPad, SliderPad} = Components

const BasicTogether = ()=>{
    const uState= 0
    return(
        <App  uState={uState}>
            <Display/>
            <ControlPad/>
            <SliderPad/>
        </App>
    )
}

export default BasicTogether