import React, {useContext,useEffect} from "react"

    
const Context  = React.createContext()




    
    
  function ContextProvider({children})  {
      const [allPhotos, setAllPhotos] = React.useState([])
      const [cartItems, setCartItems] = React.useState([])
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
     useEffect(() => {
   fetch(url)
  .then(res => res.json())
   .then(data => setAllPhotos(data))
},[])

 function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
          
            if(photo.id === id) {
             
                return {
           
                    ...photo,
                    isFavorite: !photo.isFavorite
                   
                }
            }
            return photo
            
        })
         setAllPhotos(updatedArr)
    }
    
    
    function emptyCart() {
        setCartItems([])
    }
    
    function addToCart(img) {         
      setCartItems(prevCart => [...prevCart, img])   
 }
    
    function removeFromCart(id) {
        setCartItems(prevCart => prevCart.filter(item => item.id !== id))
    }
  
    
    
    
    
    
  
     
     return (
        <Context.Provider value={{allPhotos, toggleFavorite, cartItems, addToCart, removeFromCart,emptyCart}}>
        {children}
        </Context.Provider>
    )
     
 } 
 export {ContextProvider, Context}
    
    
    

      
        
    
    
    
