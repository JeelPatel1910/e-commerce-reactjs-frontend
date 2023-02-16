import React from 'react';
import RoutingList from '../components/Helpers/RoutingList';
import Header from '../components/common/Header';
import { Route, Routes } from 'react-router-dom';

function Web() {
  return (
    <div>
         <Header/>
         <Routes>
              {
                RoutingList.map((item) => <Route  key={item.path} path={item.path} exact={item.exact} element={item.element} />)
              }
         </Routes>
    </div>
  )
}

export default Web;