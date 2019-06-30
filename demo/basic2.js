import React from 'react'
import BoilerPlate from '../src'
const {App, Components} = BoilerPlate
const {Display, SliderPad} = Components

const BasicTwo = ()=>{
    const uState= 0
    return(
        <App  uState={uState}>
            <Display/>
            <SliderPad/>
        </App>
    )
}

export default BasicTwo