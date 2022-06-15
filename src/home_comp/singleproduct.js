import {Link} from 'react-router-dom'
import add from './../add_cart.ico'
import like from './../like.ico'
import unlike from './../unlike.ico'
//import product from '../products/snakeplant.png'
const Singleproduct = ({id,name,price,product_thumb,isliked,index})=>{

    
    return(
        <article className={'product_cont' } >
            <div className='p_image'><img src={product_thumb} className='plant_thumb' alt={name}/></div>
            <div className='p_title'><Link to={`/product_id${id}`}>{name}</Link></div>
            <div className='p_action'>
                
                <article className='tag'>${price}</article>
                <div className='likee'><img src={isliked?like:unlike} className='like_ico' alt='like'/></div>
            </div>
            
        </article>
   )
}

export default Singleproduct;