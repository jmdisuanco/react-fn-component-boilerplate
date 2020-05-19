import React , {useContext} from 'react'
import AppContext from '../AppContext'
import ReactAnime from 'react-animejs'
const {Anime} = ReactAnime

/*
for react-animejs demo and usage please refer to https://github.com/jmdisuanco/jm-react-anime 
*/
const DisplayAnimation = () =>{

    let  [ctx]  = useContext(AppContext);

    let w = window.innerWidth
    const animation = [
      {
        targets:'#Box',
        translateX:(ctx /100) * w,
        easing:'easeInOutSine',
        duration:1000
      }]
    

    return(
        <Anime
        initial={[
          {
            targets: "#Box",
            translateX: 50,
            easing: "linear"
          }
        ]}
        _onUpdate = {animation}
      >
        <div id="Box" style={{ height: 50, width: 50, background: "#d3d" }} />
      </Anime>
        )
}

export default DisplayAnimation