import './scss/Common.scss';
import Products from './page/Products'

import Header from './components/Header'
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div id="wrap">
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
