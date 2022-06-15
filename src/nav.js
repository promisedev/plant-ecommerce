import logo from './logo.ico'
import cart from './cart.ico'
import {Link} from 'react-router-dom'
import {useGlobalContext} from './context_api'
const Nav = ()=>{
    const {cart_items, handleClick} = useGlobalContext();
    
    return(
        <div className='nav_div'> 
        <article className='logo_div'>
            <img src={logo}className='logo_img' alt='deekor logo'/>
        </article>
        {/* ...................................................... */}
        <article className='search_div'>
            <form>
                <input type='text'  placeholder='Look for your favourite Organic and Synthetic plant here... '
                />
                <button type='submit' className='search_button' onClick={handleClick}></button>
            </form>
        </article>
        {/* ....................................................... */}
        <article className='pages_div'>
<ul className='nav_link'>
<li><Link to='account'> Account</Link></li>
<li> Categories</li>
<li><Link to='favorites'> Favourites</Link></li>
<li><Link to='/'> Home</Link></li>
</ul>
        </article>
        {/* ....................................................... */}
        <article className='cart_logo'>
       <Link to='cart'> <div className='cart_div'>
            <img src={cart} className='cart_img'/>
            <article className='cart_tag'>{cart_items}</article>
        </div></Link>
        </article>
        {/* ....................................................... */}
        </div>
    )
}
export default Nav;