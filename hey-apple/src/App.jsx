import './scss/Common.scss';
import MainPage from './page/MainPage';

import Header from './components/Header'
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="wrap">
      <Header />
      <MainPage/>
     
    </div>
  );
}

export default App;
