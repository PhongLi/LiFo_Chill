import { useContext } from 'react'
import { AppContext } from '~/Store/session';

export const useSelector = (callback) => {
    const {background} = useContext(AppContext);
    const [backgroundState] = background
       
    const State = {...backgroundState}
    
    return callback(State)
 }