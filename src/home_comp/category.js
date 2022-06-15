import SingleCategory from './singlecategory'
import { useGlobalContext } from './../context_api';
const Category = ()=>{
    const {category} = useGlobalContext(); 

    return(
        <section className='discount_div'>
            <article className='discount_label'>SHOP FROM OUR CATEGORY</article>
            <article className='category_item'>
              {category.map((product,index)=>{
                   return <SingleCategory key={product.id} {...product} />
              })}  
             
            </article>
        </section> 
        )
}
export default Category; 