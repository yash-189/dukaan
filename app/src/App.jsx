import React, { useState } from 'react'
import { BrowserRouter, Route, RouterProvider, Routes, createHashRouter, createRoutesFromElements } from 'react-router-dom';
import SideBar from './components/common/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoutes from './routes/PrivateRoutes';


const App = () => {

  const [toggle, setToggle] = useState(false)


  const router = createHashRouter(
    createRoutesFromElements(
      <>
      
      
        <Route
        path="*"
        element={<PrivateRoutes setToggle={setToggle} toggle={toggle} />}
      />
 
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router}/>

    </>
  );
};


export default App