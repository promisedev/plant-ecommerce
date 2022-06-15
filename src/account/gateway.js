import {useGlobalContext} from '../context_api';
import Login from './login';
import Signup from './signup';

const Gateway = ()=>{
const {loginoverlay} = useGlobalContext();
    return(

        <section className="form_div">
            {loginoverlay?<Login/>:<Signup/>}
        </section>
    )
}
 
export default Gateway;