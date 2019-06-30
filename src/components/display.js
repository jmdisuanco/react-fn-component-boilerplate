import React , {useContext} from 'react'
import { Statistic } from 'antd';
import AppContext from '../AppContext'

const Display = () =>{

    let  [ctx]  = useContext(AppContext);

    return(
            <Statistic title="Counter" value={ctx} />
        )
}

export default Display