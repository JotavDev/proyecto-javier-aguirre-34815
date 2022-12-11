import './App.css';
import PrincipalImage from './components/header/PrincipalImage';
import NavBar from './components/header/NavBar'
import ItemListContainer from './components/products/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from './components/products/ItemDetailContainer';
import { CartContextProvider } from './context/cartContext';
import CartView from './components/cart/CartView';
import Footer from './components/footer/Footer';
import Checkout from './components/checkout/Checkout';
import ImagePromotion from './components/images/ImagePromotion';

function App() {
  return(
    <CartContextProvider >
      <BrowserRouter>
        <PrincipalImage/>
        <NavBar/>
        <ImagePromotion/>
        <Routes>
          <Route path="/proyecto-javier-aguirre-34815/" element={<ItemListContainer/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
          <Route path="/detail/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartView/>}></Route>
          <Route path="/thankyou/:idOrder" element={<Checkout/>}></Route>
          <Route path="*" element={<h1>Este sitio se encuentra en construcción</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  )
}

// Esto es una prueba

export default App;