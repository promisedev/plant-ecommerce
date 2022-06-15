import {Link} from 'react-router-dom';
import { useRef,useState } from 'react';
import { useGlobalContext } from "../context_api";

const Login = ()=>{
    const {signup, users,setLoggeduser, setIslogin} = useGlobalContext();
const [email,setEmail] = useState(null);
const [password,setPassword] = useState(null);
const emailref = useRef(null);
const passwordref = useRef(null);
const errormsg = useRef(null);
const details = ()=>{
    setEmail(emailref.current.value);
    setPassword(passwordref.current.value);
    errormsg.current.textContent = null
}

const payLoad = (e)=>{
e.preventDefault();
console.log(email,password)
const currentuser = users.filter((user)=>user.username === email && user.password == password);
console.log(currentuser);
if(currentuser.length === 0){
    errormsg.current.textContent ="Username or password is incorrect!"
}else{
    setLoggeduser(currentuser);
    setIslogin(true);
}

}
    return(
        <section className="login_container">
            <form>
               <input type="email" name="email" placeholder="user@email.com" ref={emailref} onChange={details}/>
               <input type="password" name="password" placeholder="password" ref={passwordref} onChange={details}/> 
               <h6 ref={errormsg}></h6>
               <button onClick={payLoad}>Login</button>
    
            </form>
            <p onClick={signup}><Link to="">Create  an account?</Link> </p>
        </section>
    )
}

export default Login;