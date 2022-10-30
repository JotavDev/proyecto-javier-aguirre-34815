import './NavBar.css'
import CartWidget from '../cart/CartWidget'

function NavBar(){
    return <header>
        <navbar>
            <div className="DivLogo">
                <img className="LogoHeader" src="https://i.imgur.com/eSdXgH0.png" alt="Logo Pukem" />
            </div>
            <div className="DivMenu">
                <ul className="UlMenuHeader">
                    <li className='LiMenuHeader'><a href="#">Home</a></li>
                    <li className='LiMenuHeader'><a href="#">Tienda</a></li>
                    <li className='LiMenuHeader'><a href="#">Contacto</a></li>
                    <li className='LiMenuHeader'><a href="#"><CartWidget counter="0"/></a></li>
                </ul>
            </div>
        </navbar>
    </header>
}

export default NavBar