import React , {useContext} from 'react'
import { Button, Icon } from 'antd';
import AppContext from '../AppContext'

const ControlPad = () =>{
    let  [ctx,updateCtx]  = useContext(AppContext);
  
    const handleInc = () =>{
        updateCtx(ctx + 1)
    }
    const handleDec = () =>{
        updateCtx(ctx -1)
    }

    return(
        <div>
            <Button.Group size={'large'}>
                <Button type="primary" onClick={handleInc}>
                    <Icon type="up" />
                </Button>
                <Button type="primary" onClick={handleDec}>
                    <Icon type="down" />
                </Button>
            </Button.Group>
        </div>
        )
}

export default ControlPad