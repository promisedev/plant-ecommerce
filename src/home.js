 import Hero from './home_comp/hero'
 import DiscountSale from './home_comp/discount'
 import CategorySale from './home_comp/category'
import BestSelling from './home_comp/bestselling'
 const Home = ()=>{
   return(
       <div>
         <Hero/>
         <DiscountSale/>
         <CategorySale/>
         <BestSelling/>
       </div>
   );
}
export default Home;