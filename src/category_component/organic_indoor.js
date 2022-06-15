import Singleproduct from '../home_comp/singleproduct'
import {useGlobalContext} from '../context_api'
const Organic_indoor = ()=>{
    const {organicindoor} = useGlobalContext();
    console.log(organicindoor);
    return(
        <section className='organic_div'>
<article className='discount_item'>
              {organicindoor.map((product,index)=>{
                   return <Singleproduct key={product.id} {...product} />
              })}  
             
            </article>
        </section>
    )
}
export default Organic_indoor;