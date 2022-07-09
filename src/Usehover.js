import {useState,useEffect, useRef} from "react"

export default function useHover() {
    const [hover, setHover] = useState(false)
    const ref= useRef(null)
    
    function enter() {
        setHover(true)
        
    }
    
    function leave() {
        setHover(false)
    }
    
    useEffect(() => {
     ref.current.addEventListener("mouseenter", enter)
     ref.current.addEventListener("mouseleave", leave) 
     
     
    },[])
    
   return[hover,ref] 
}