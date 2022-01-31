import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { Link } from "react-router-dom";
function Header() {
  const [{basket, user}] = useStateValue();
  const handleAuth = () =>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <div className="header">
        <h3>
        Hello {user?.email}
        </h3>

        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <h3>{basket?.length}</h3>
            <Link to={!user && '/login'}>
            <button className="button__top" onClick={handleAuth}>{user? 'Sign Out' : 'Sign In'}</button>
            </Link>
        </div>
      </div>
  );
}

export default Header;
