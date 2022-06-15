import {useParams} from 'react-router-dom'
import {useGlobalContext} from './context_api'
import {useRef,useState} from 'react'
//import logo from './logo.ico'
const Product = ()=>{
const {data,Addtocart,readmore,toggleRead} = useGlobalContext();
const id = useParams();
const item = data.filter((item)=>item.id == id.id) 
const overview_container = useRef(null);
// const [readmore, setReadmore] = useState(false)
// const toggleRead = (e)=>{
// setReadmore(!readmore)
//   overview_container.current.style = readmore?null:'show'
// console.log(overview_container.current, "clicked")
// }

//const {id,name,type,price,product_image} = item;
    return(
    <>
       {item.map((item)=>{ 
           const{id,product_image,product_thumb,name,type,price,overview,features}=item;
     return (
     <section className="single_product_div" key={id}>
     <article className="single_product1" >
                <div className="single_item1">
                <article className="single_item_image"> <img src={product_image} className="cart_img" alt={name}/></article>
                <article className="single_item_name">{name}</article>
                {/* <article className="single_item_name"></article> */}
                <article className="single_item_price">
                  <div>{type}</div>
                  <div className='s_price'>$<span>{price}.00</span></div>

                  </article>
                </div>
                {/* <div className="single_item2"></div> */}
            </article>
         
            <article className="single_product2">
                <div className="single_item3">
                <p className='s_desc'>Description:</p>
                <section className='feature_body'>
                <div className={`${readmore ?'overview_desc show':'overview_desc'}`} ref={overview_container}>
                  <p>{overview} </p>
                  <p className='s_desc'>Features:</p>
                  <ul className='feature_list'>
                  {features.map((item,index) => {
                    return <li key={index}>{item}</li>
                  })}
                  </ul>
                </div>
                {/* /////////////// */}
                <div className='readmore_div'>
                  <button onClick={toggleRead}>{readmore?'read less':'read more'}</button>
                </div>
              </section>
                </div>
                <div className="single_item4" onClick={()=>Addtocart(id)}>ADD TO CART</div>
            </article>
     </section>
     )
           })}

         </>

        
    ) 
 }
 export default Product;

//  <article className="single_product1">
//                 <div className="single_item1">
//                 <article className="single_item_image"><img src={product_image} alt={name}/></article>
//                 <article className="single_item_name">{name}</article>
//                 <article className="single_item_name">{type}</article>
//                 <article className="single_item_price">$<span>{price}</span></article>
//                 </div>
//                 <div className="single_item2"></div>
//             </article>
         
//             <article className="single_product2">
//                 <div className="single_item3"></div>
//                 <div className="single_item4"></div>
//             </article>