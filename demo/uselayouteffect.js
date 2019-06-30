import React from 'react'
import BoilerPlate from '../src'
const {App, Components} = BoilerPlate
const {DisplayAnimation, SliderPad } = Components

const LayoutEffectDemo = ()=>{
    const uState= 0
    return(
        <App  uState={uState}>
        <div style={{height:100}}></div>
            <DisplayAnimation/>
            <SliderPad/>
        </App>
    )
}

export default LayoutEffectDemo