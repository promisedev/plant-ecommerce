import React, { useState, useEffect, useContext, useReducer} from 'react';
import {Reducer} from './reducer'
import {Data} from './data'
import {DataCat} from './data_category'
import {Foot_list} from './foot_list'
import Users from './account/users.json'
const AppContext = React.createContext();

const initialState= {
  
  cart:[],
  data:Data,
  loading:false,
  totalquantity:0,
  totalamount:0,
  cart_items:0,
  product:[],
}
const AppProvider = ({children}) => {
const [footer_list, setFooter_list] = useState(Foot_list);  
const [category, setCategory] = useState(DataCat);
const [data,setData] = useState(Data);
const [users,setUsers] = useState(Users);
const [islogin, setIslogin] = useState(false);
const [loginoverlay, setLoginoverlay] = useState(true);
const [loggeduser, setLoggeduser] = useState([]);

//const [cart,setCart] = useState([]);
const [discounts, setDiscounts ] = useState([]);
const [bestselling,setBestselling] = useState([]);
const [organicindoor,setOrganicindoor] = useState([]);
const [organicoutdoor,setOrganicoutdoor] = useState([]);
const [syntheticindoor,setSyntheticindoor] = useState([]);
const [syntheticoutdoor,setSyntheticoutdoor] = useState([]);
const [readmore, setReadmore] = useState(false);

const login =()=>{
  setLoginoverlay(true)
}

const signup =()=>{
  setLoginoverlay(false)
}

const toggleRead = (e)=>{
setReadmore(!readmore)}

const NewDis = ()=>{
const discountItems = data.filter((product)=>{
  if(product.isdiscount === true){
    //  console.log(product);
     return product;
}})
setDiscounts(discountItems)
}

const NewBest = ()=>{
  const bestItems = data.filter((product)=>{
    if(product.qty_sold >= 50){
      //  console.log(product);
       return product; 
  }})
  setBestselling(bestItems)
  }
const Plantcategory = ()=>{
  const organic = data.filter((product)=>product.type === 'organic' && product.category_type === 'indoor' )
  setOrganicindoor(organic)
  }
useEffect( ()=>{
NewDis();
NewBest();
Plantcategory()
},[data]);

const handleClick = (e)=>{
  e.preventDefault()}

let [state, Dispatch] = useReducer(Reducer, initialState);

const Addtocart = (id)=>{
  console.log(id,"hello");
  Dispatch({type:'ADDTOCART',payload:id})
}
const increase = (id)=>{
  console.log(id,"hello");
  Dispatch({type:'INCREASE',payload:id})
}
const decrease = (id)=>{
  console.log(id,"hello");
  Dispatch({type:'DECREASE',payload:id})
}

useEffect(()=>{
Dispatch({type:'GET_TOTALS'})
},[state.cart])

    return (   
  <AppContext.Provider value={{
    data,
    ...state,
    discounts,
    organicindoor,
    organicoutdoor,
    syntheticindoor,
    syntheticoutdoor,
    category,
    bestselling,
    footer_list,
    Addtocart,
    increase,
    decrease,
    handleClick,
    readmore,
    toggleRead,
    users,
    islogin,
    setIslogin,
    loginoverlay,
    login,
    signup,
    loggeduser,
    setLoggeduser
  }}>{children}</AppContext.Provider>
    )
}
 export const useGlobalContext = () =>{
    return useContext(AppContext) 
 }

export  {AppContext, AppProvider}