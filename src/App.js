import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './home'
import SingleProduct from './product'
import Cart from './cart'
import Nav from './nav'
import Foot from './foot'
import Account from './account/account'
import Organic_indoor from './category_component/organic_indoor'
import Organic_outdoor from './category_component/organic_outdoor'
import Synthetic_indoor from './category_component/synthetic_indoor'
import Synthetic_outdoor from './category_component/synthetic_indoor'

function App() {
  return( 
   <Router> 
     <Nav/>
   <Routes>
     <Route  path="/" element={<Home/>}/> 
      <Route  path="/cart" element={<Cart/>}/>
      <Route  path="/account" element={<Account/>}/>
<Route  path="/organic_indoor" element={<Organic_indoor/>}/>
<Route  path="/organic_outdoor" element={<Organic_outdoor/>}/>
<Route  path="/synthetic_indoor" element={<Synthetic_indoor/>}/>  
<Route  path="/synthetic_outdoor" element={<Synthetic_outdoor/>}/>    
     <Route  path="/product_id:id" element={<SingleProduct/>}/>
    </Routes>
    <Foot/>
    </Router>
  )  
  ;
}

export default App;
