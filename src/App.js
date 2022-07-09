import React from "react"
import Header from "./Header"
import Cart from "./Cart"
import Photos from "./Photos"
import {Route, Routes} from "react-router-dom"


function App() {    
    return (
        <div>
            <Header />
           
            <Routes>
              <Route exact path="/" element={<Photos />} />
              <Route path="/Cart" element={<Cart/>} />
            </Routes>
        </div>
    )
}

export default App