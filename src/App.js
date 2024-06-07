import logo from './logo.svg';
import './App.css';
import AddCustomer from './Components/AddCustomer';
import SearchCustomer from './Components/SearchCustomer';
import DeleteCustomer from './Components/DeleteCustomer';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddCustomer/>}/>
      <Route path="/search" element={<SearchCustomer/>}/>
      <Route path="/delete" element={<DeleteCustomer/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
