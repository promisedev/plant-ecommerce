import {useGlobalContext} from '../context_api';
import {Link} from 'react-router-dom';

const Dashboard = ()=>{

const {loggeduser} = useGlobalContext();

return(
    <section className='dashboard_div'>
   {loggeduser.map((user)=>{
const {id,username,fname,lname,password} = user;

return(

    
        <article className='dashboard_cont'>
            <div className='dashboard_avatar'>
                <article className='avatar_image'>
                    Avatar
                </article>
                <article className='avatar_name'>{`${fname.toUpperCase() +" "+ lname.toUpperCase() }`}</article>
            </div>
            <div className='dashboard_submenu'>
                <ul className='submenu_list'>
                    <li><Link to=''>Profile</Link></li>
                    <li><Link to='/cart'>Cart List</Link></li>
                    <li><Link to='/favorites'>Favorite</Link></li>
                    <li><Link to=''>Account Settings</Link></li>
                </ul>
            </div>
        </article>
    
)
   })}
   </section>
   )
}
 
export default Dashboard;


// return(

//     <section className='dashboard_div'>
//         <article className='dashboard_cont'>
//             <div className='dashboard_avatar'>
//                 <article className='avatar_image'>
//                     Avatar
//                 </article>
//                 <article className='avatar_name'>promise kpaliku</article>
//             </div>
//             <div className='dashboard_submenu'>
//                 <ul className='submenu_list'>
//                     <li><Link to=''>Profile</Link></li>
//                     <li><Link to='/cart'>Cart List</Link></li>
//                     <li><Link to='/favorites'>Favorite</Link></li>
//                     <li><Link to=''>Account Settings</Link></li>
//                 </ul>
//             </div>
//         </article>
//     </section>
// )