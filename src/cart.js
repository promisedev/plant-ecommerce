import {useGlobalContext} from './context_api'
import empty from './empty_cart.ico'
import up from './up.ico'
import down from './down.ico'

export const Cart = ()=>{
    const {cart, totalamount,totalquantity,increase,decrease,readmore,toggleRead} = useGlobalContext();
    if(cart.length === 0){
        return(
            <section className="empty_cart_div"> 
            <article className="empty_div">your cart is empty at the moment</article>
            <article className="empty_div"><img src={empty} className="empty" alt="empty cart"/></article>
             </section>
        )
    } 
    return(
        <section className="cart_cont">
        <article className="cart_item1">
        <div className="cart_list">
        {/* ////////////////// */}
        { cart.map((item)=>{
        const{id,name,qty,product_thumb, }= item;
          return(
              <article className="single_cart">
        <div className="item_img"> <img src={product_thumb} className="cart_img" alt={name}/></div>
        <div className="item_control">
        <div className="incr" onClick={()=>increase(id)}><img src={up} alt="up"/></div>
        <span>{qty}</span>
        <div className="decr" onClick={()=>decrease(id)}><img src={down} alt="down"/></div>
         </div>
        </article>  
        )  
        })
        
        }
         {/*  ////////////////////*/}
        </div>
        <div className="cart_overview">
        <article className="ov_title1">Price Overview</article>
        <article className="ov_title2">Total Quantity: <span>{totalquantity}</span> </article>
        <article className="ov_title3">Total AMount: $<span>{totalamount}</span></article>       
        </div>
        </article>
        <article className="single_product2">
                <div className="single_item3">
                <p className='s_desc'>Overview:</p>
                <section className='feature_body'>
                <div className={`${readmore ?'overview_desc show':'overview_desc'}`} >
                  <p>Few description about the plant and more other description concerning the plant, the list
of what the plant has and what it does not have will be listed below for proper reference and </p>
                </div>
                {/* /////////////// */}
                <div className='readmore_div'>
                  <button onClick={toggleRead}>{readmore?'read less':'read more'}</button>
                </div>
              </section>
                </div>
                <div className="single_item4" >CHECKOUT</div>
            </article>
        </section>
    ) 
 }
 export default Cart;