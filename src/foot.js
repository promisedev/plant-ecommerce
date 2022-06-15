import {Link} from 'react-router-dom'
import {useGlobalContext} from './context_api'

const Foot = ()=>{
const {footer_list,handleClick} = useGlobalContext();
return(
    <section className="footer_center">
    <article className="f_col1">
    <div className="sub_head">LET US HELP YOU</div>
    {/* //////////// */}
    <ul className="sub_list">
    {footer_list.map((list)=>{
        return(
            <li key={list.id}><Link to={list.link}>{list.name}</Link></li>
        )

    })}
    </ul>
    
    </article>
    {/* //////////////////////////////////// */}
    <article className="f_col2">
    <div className="sub_head">NEW TO DEEKOR?</div>
    <div className="sub_desc">Subscribe to our news letter to get updates on our latest offers! </div>
    <form className="sub_email" onSubmit={handleClick}>
    <input type="email" name="email" id="email" placeholder="Enter your Email Address" />
    {/* <button type="submit" onClick={handleClick}></button> */}
    </form>
    </article>
     </section>
)
}

export default Foot;