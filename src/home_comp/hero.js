import hero from './../hero.png'
import {Link} from 'react-router-dom'
import {useGlobalContext} from './../context_api'
const Hero = ()=>{
 const {category} = useGlobalContext(); 
 //console.log(category);  
    return(
        <section className="hero_cont">
<article className="hero_category">
    <ul className="hero_link">{category.map((cat)=>{
        return(
            <li key={cat.id}><Link to={cat.link}>{cat.type} </Link></li>
            )
    })}
    </ul>
</article>
{/* ///////////////////////////////////////////// */}
<article className="hero_image">
    <img src={hero} className="hero_img" alt="hero"/>
</article>
        </section>
    )
}
export default Hero;