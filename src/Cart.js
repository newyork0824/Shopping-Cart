import React from "react"
import {Context} from "./Context"
import CartItem from "./Cartitem"

function Cart() {
    
    const [buttonText, setButtonText] = React.useState("Place Order")
    const basePrice = 5.99 
    const {cartItems,emptyCart} = React.useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} basePrice={basePrice} />
    ))
   
  
    
    function placeOrder() {
 
     setButtonText("Ordering...")    
   setTimeout(() => {
       setButtonText("Place Order")
      
       emptyCart()
       },3000)
       }    
    
    const cost = 5.99 * cartItems.length
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost"> Total:${cost} </p>
             <div className="order-button">
          {cartItems.length > 0?  <button onClick= {placeOrder} className="cart-page div.order-button">{buttonText}</button> : "" } 
            </div>
        </main>
    )
}

export default Cart