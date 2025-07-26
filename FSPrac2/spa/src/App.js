import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import Inbox from './pages/inboxx.jsx';
import Sent from './component/sent.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Inbox/>}/>
          <Route path='sent' element={<Sent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
