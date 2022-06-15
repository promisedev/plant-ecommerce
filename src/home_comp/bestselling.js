import Singleproduct from './singleproduct'
import { useGlobalContext } from './../context_api';
const BestSelling = ()=>{
    const {bestselling} = useGlobalContext(); 
//console.log(bestselling);
    return(
        <section className='discount_div'>
            <article className='discount_label'>BEST SELLING PLANTS</article>
            <article className='discount_item'>
              {bestselling.map((product,index)=>{
                   return <Singleproduct key={product.id} {...product} />
              })}  
             
            </article>
        </section> 
        )
}
export default BestSelling; 