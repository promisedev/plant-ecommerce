import {useGlobalContext} from '../context_api'

const Signup = ()=>{

    const {login} = useGlobalContext();

    return(
        <section className='signup'>
            Don't worry you're all set up

            <div onClick={login} className='logbtn'>
                log in
            </div>
        </section>
    )
}

export default Signup;