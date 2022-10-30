import './App.css';
import NavBar from './components/header/NavBar'
import ItemListContainer from './components/products/ItemListContainer';

function App() {
  return <>
    <NavBar/>
    <ItemListContainer text="Bienvenidos a la tienda"/>
  </>
}

export default App;
