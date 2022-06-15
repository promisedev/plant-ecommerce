import {Link} from 'react-router-dom'
import add from './../add_cart.ico'
import like from './../like.ico'
import unlike from './../unlike.ico'
//import product from '../products/snakeplant.png'
import {useGlobalContext} from '../context_api'
const SingleDiscount = ({id,name,price,product_thumb,discount,isliked,index})=>{
const {Addtocart,islogin} = useGlobalContext();
    
    return(
        <article className={'product_cont' } >
            <div className='p_image'><img src={product_thumb} className='plant_thumb' alt={name}/></div>
            <div className='p_title'><Link to={`/product_id${id}`}>{name}</Link></div>
            <div className='p_action'>
                <article className='add_ico'> 
                <img src={add} className='add_img' alt='add icon' onClick={()=>Addtocart(id)}/>
                </article>
                <article className='price_tag'>${price}</article>
                <div className='discount_tag'>-{discount}%</div>
                <div className='likee'><img src={isliked?like:unlike} className='like_ico' alt='like'/></div>
            </div>
            
        </article>
   )
}

export default SingleDiscount;