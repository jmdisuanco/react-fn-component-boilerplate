import React , {useContext, useLayoutEffect} from 'react'
import AppContext from '../AppContext'
import anime from 'animejs'

const DisplayAnimation = () =>{

    let  [ctx]  = useContext(AppContext);

    useLayoutEffect(()=>{
        anime({
            targets: document.getElementById('target'),
            translateX: ctx * 10,
            rotate: `${ctx}turn`,
            backgroundColor: '#800080',
            duration: 800
          });
    })

    return(
            <div id="target" style={{height:100,width:100,backgroundColor:'#800080'}}>

            </div>
        )
}

export default DisplayAnimation