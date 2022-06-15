import SingleDiscount from './singlediscount'
import { useGlobalContext } from './../context_api';

const DiscountSale = ()=>{
    const {discounts} = useGlobalContext(); 
console.log(discounts);
    return(
        <section className='discount_div'>
            <article className='discount_label'>DISCOUNT SALE</article>
            <article className='discount_item'>
              {discounts.map((product,index)=>{
                   return <SingleDiscount key={product.id} {...product} />
              })}  
             
            </article>
        </section> 
    )
}
export default DiscountSale;