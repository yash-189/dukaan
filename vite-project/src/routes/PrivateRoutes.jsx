import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from '../components/common/Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'
import Header from '../components/common/Header'

const PrivateRoutes = ({toggle,setToggle}) => {
  return (
    <>
     <SideBar toggle={toggle} setToggle={setToggle} showSidebar={setToggle} />
   
  
  <main
                className={`p-4 ${toggle ? "md:ml-16" : " md:ml-[12rem]"
                    } transition-all duration-200      3xl:mx-auto md:pr-4`}
            >
              <Header toggle={toggle} />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            </Routes>
            </main>

</>
  )
}

export default PrivateRoutes