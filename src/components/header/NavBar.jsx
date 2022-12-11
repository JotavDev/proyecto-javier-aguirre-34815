import './NavBar.css'
import CartWidget from '../cart/CartWidget'
import {Link} from 'react-router-dom';

function NavBar(){
    return <header>
        <nav>
            <div className="DivLogo">
                <Link to="/"><img className="LogoHeader" src="https://i.imgur.com/eSdXgH0.png" alt="Logo Pukem" /></Link>
            </div>
            <div className="DivMenu">
                <ul className="UlMenuHeader">
                    <li className='LiMenuHeader'><Link to="/proyecto-javier-aguirre-34815/">Tienda</Link></li>
                    <li className='LiMenuHeader'><Link to="/category/animales">Animales</Link></li>
                    <li className='LiMenuHeader'><Link to="/category/personajes">Personajes</Link></li>
                    <li className='LiMenuHeader'><Link to="/category/fantasia">Fantasía</Link></li>
                    <li className='LiMenuHeader'><Link to="/"><CartWidget counter="0"/></Link></li>
                </ul>
            </div>
        </nav>
    </header>
}

export default NavBar