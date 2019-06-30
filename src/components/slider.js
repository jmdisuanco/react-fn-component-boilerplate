import React , { useContext} from 'react'
import { Slider } from 'antd';
import AppContext from '../AppContext'

const SliderPad = () =>{
    let  [ctx, updateCtx]  = useContext(AppContext);
  
    const handleChange = value =>{
        updateCtx(value)
    }
    
    return(
        <div>
              <Slider defaultValue={ctx} onChange={handleChange} value={ctx} />
        </div>
        )
}

export default SliderPad