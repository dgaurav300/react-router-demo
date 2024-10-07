import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Layout from './pages/Layout';
import { Home } from './pages/Home';
import { Blogs } from './pages/Blogs';
import { Contact } from './pages/Contact';
import { NoPage } from './pages/NoPage';
import { Products } from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>        
              <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />          
                        <Route path="blogs" element={<Blogs />} />          
                        <Route path="contact" element={<Contact />} />
                        <Route path="products" element={<Products />} />
                        <Route path="*" element={<NoPage />} />
                                
               </Route>      
            </Routes>    
       </BrowserRouter>
    </div>
  );
}

export default App;
