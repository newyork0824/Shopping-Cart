import React,{} from "react"
import {Context} from "./Context"
import useHover from "./Usehover"



function CartItem({item}) {
    const {removeFromCart} = React.useContext(Context)
    const [binHovered,ref] = useHover()
   


return (
<div className = "cart-item">
 <i className= {binHovered? "ri-delete-bin-fill" : "ri-delete-bin-line"}
  ref={ref}
  onClick={()=>removeFromCart(item.id)} > </i>
 <img src={item.url} width="130px" />
 <p> $5.99 </p>
</div>

)





}
    
    export default CartItem