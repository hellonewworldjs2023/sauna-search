import {  Route, Routes } from 'react-router-dom';
import '../App.css';
import Homepage from '../pages/homepage';
import NoMatch from '../pages/noMatch';
import Sauna from '../pages/sauna';
import Saunas from '../pages/saunas';

function App() {

  return (
    <>   
        <Routes>
          <Route path='/' exact element={<Homepage/>}/>
          <Route path='/saunas' element={<Saunas/>}>
            <Route path=':saunaId' element={<Sauna/>}/>
          </Route>
          <Route path='*' element={<NoMatch/>}/>
        </Routes>    
    </>
  );
}

export default App;
