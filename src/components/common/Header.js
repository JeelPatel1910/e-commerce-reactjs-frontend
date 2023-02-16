import React from 'react';
import { Icons } from '../Helpers/imageConst';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}} className="container">
       <Link to="/"><img src={Icons.logo} alt="logo" /></Link>
       <Link to="/login" className='primary button'> 
       Log in
       </Link>
    </div>
  )
}

export default Header;