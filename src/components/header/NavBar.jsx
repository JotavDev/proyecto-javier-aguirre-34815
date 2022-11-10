import './NavBar.css'
import CartWidget from '../cart/CartWidget'
import {Link} from 'react-router-dom';

function NavBar(){
    return <header>
        <nav>
            <div className="DivLogo">
                <img className="LogoHeader" src="https://i.imgur.com/eSdXgH0.png" alt="Logo Pukem" />
            </div>
            <div className="DivMenu">
                <ul className="UlMenuHeader">
                    <li className='LiMenuHeader'><Link to="/">Home</Link></li>
                    <li className='LiMenuHeader'><Link to="/">Tienda</Link></li>
                    <li className='LiMenuHeader'><Link to="/">Contacto</Link></li>
                    <li className='LiMenuHeader'><Link to="/"><CartWidget counter="0"/></Link></li>
                </ul>
            </div>
        </nav>
    </header>
}

export default NavBar