import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateLayout } from '../components/layout/private/PrivateLayout';
import Login from '../components/user/Login';
import Register from '../components/user/Register';



export const Routing = () => {
    return (
        <BrowserRouter>
          <Routes>
            {/* Cargamos los componentes de la ruta pública */}
              
              <Route path="/" element={<PrivateLayout />}>
                <Route index element={<Login />} />
                <Route path='login' element={<Login />} />
                <Route path='registro' element={<Register />} />
              </Route>
    
            {/* Cargamos los componentes de la ruta privada */}
          </Routes>
        </BrowserRouter>
      )
}
