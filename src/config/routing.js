import React from 'react'
import{ Route, Routes} from "react-router-dom" 
import Layout from '../components/Layout'
import Home from '../pages/Home'


import { home } from './routeConstant'

const Routing = () => {
  return (
    <div>
    
          <Layout>
            <Routes>      
            <Route path={home} exact element={<Home/>}/>
            </Routes>
          </Layout>
    </div>
  )
}

export default Routing