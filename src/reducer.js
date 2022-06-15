import {useGlobalContext} from './context_api';

export const Reducer= (state,action)=>{
// useEffect(()=>{
//     let totalqty = state.cart.qty;
// },[state.cart_item])

  if(action.type === "ADDTOCART"){
      console.log(action.payload);

      const item = state.data.filter((item)=>item.id === action.payload);
      return{...state,cart:[...state.cart,...item],cart_items:state.cart.length+1}
  }
  if(action.type === "INCREASE"){
      
      let tempcart = state.cart.map((cart)=>{
          if(cart.id === action.payload){
              return{...cart,qty: cart.qty +1}
          }
          return cart
      })
    return{...state, cart:tempcart}  
  }

if(action.type === "DECREASE"){
      let tempcart = state.cart.map((cart)=>{
          if(cart.id === action.payload){
              return{...cart,qty: cart.qty -1}
          }
          return cart
      }).filter((cart)=>cart.qty !== 0);
      
    return{...state, cart:tempcart,cart_items:state.cart.length-1}  
  }
if(action.type === "GET_TOTALS"){
  let {totalamount,totalquantity} = state.cart.reduce((total,items)=>{
    const {qty,price} = items
    const itemtotal = price*qty
    total.totalamount += itemtotal
    total.totalquantity += qty
    return total
  },{
    totalquantity:0,
    totalamount:0,
  }

  )
  totalamount = parseFloat(totalamount.toFixed(2))
  return{...state,totalamount,totalquantity}
}


return state
}

