
import add from './../add_cart.ico'
import like from './../like.ico'
import unlike from './../unlike.ico'
//import product from '../products/snakeplant.png'
const SingleCategory = ({id,type,category_thumb})=>{

    
    return(
        <article className={'category_cont' } >
            <div className='c_image '><img src={category_thumb} className='plant_thumb' alt={type}/></div>
            <div className='c_title'>{type}</div>           
        </article>
   )
} 

export default SingleCategory;