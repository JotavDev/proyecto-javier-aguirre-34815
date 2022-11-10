import './App.css';
import PrincipalImage from './components/header/PrincipalImage';
import NavBar from './components/header/NavBar'
import ItemListContainer from './components/products/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return(
    <>
      <BrowserRouter>
        <PrincipalImage/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="*" element={<h1>Error 404: Esta página no existe</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;