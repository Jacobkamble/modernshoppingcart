
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductListContainer from './containers/ProductListContainer';
import CartContainer from './containers/CartContainer';


function App() {


  return (
    <>
   <Router>
   <Header/>
    <Routes>
      <Route exact path='/' element={<ProductListContainer/>}/>
      <Route exact path='/cart' element={<CartContainer/>}/>
    </Routes>
   </Router>
  
  {/* <Cart/> */}
    </>
  )
}

export default App
