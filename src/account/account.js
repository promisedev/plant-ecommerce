
import { useGlobalContext } from "../context_api";
import Dashboard from "./dashboard";
import Gateway from "./gateway";



const Account= ()=>{
    const {users,islogin} = useGlobalContext();
    console.log(users);
    return(
    <section className="account_body">
    {islogin?<Dashboard/>:<Gateway/>}
        </section>
    )
}

export default Account;