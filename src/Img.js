import React, {useContext,useRef} from "react"
import {Context} from "./Context"
import propTypes from "prop-types"
import useHover from "./Usehover"


function Image({className,img}) {
   Image.propTypes = {
     className: propTypes.string ,
     img: propTypes.shape({
         id: propTypes.string.isRequired,
         url: propTypes.string.isRequired,
         isFavorite: propTypes.bool
     })
   } 
    
    const [isHovered, ref] = useHover()
      const {toggleFavorite, cartItems, addToCart, removeFromCart} = useContext(Context)
    
    

   
    
    
    function heart() {
      if(img.isFavorite) {
        return <i  className={"ri-heart-fill favorite"} onClick={() => toggleFavorite(img.id)}></i>
      }else if(isHovered) {
        return <i  className={"ri-heart-line favorite"} onClick={() => toggleFavorite(img.id)}></i>
      } 
      
      
    }
    
    function cartIcon(img) {
      const alreadyInCart = cartItems.some(item => item.id === img.id)
      if(alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() =>removeFromCart(img.id)}/>
      } else if(isHovered) {
        return <i className="ri-shopping-cart-line cart" onClick={() => addToCart(img)} />
      } 
    }
    
 
    return (
        <div
              ref={ref}
              className={`${className} image-container`}>
           
           
           
         <img  src={img.url} className="image-grid"/>
              {heart()}
              {cartIcon(img)}
           
         </div>
    )
    
    
}

export default Image