import React from "react"
import {Link} from "react-router-dom"
import {Context} from "./Context"

function Header() {
   const {cartItems} = React.useContext(Context)
   
    function headerCart () {
       const numOfCartItems = cartItems.length || 0
       if(numOfCartItems >= 1) {
           return "ri-shopping-cart-fill ri-fw ri-2x" 
       } else {
           return "ri-shopping-cart-line ri-fw ri-2x"
       }
    }
   
    
    return (
        <header>
          <Link to="/">  <h2>Pic Some</h2> </Link>
          <Link to="/Cart"> <i className={headerCart()}></i> </Link>
        
        </header>
    )
}

export default Header
