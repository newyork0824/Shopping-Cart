import React, {useContext} from "react"
import Image from "./Img"
import {getClass} from "./Logic"
import {Context} from "./Context"




function Photos() {
    const {allPhotos} = useContext(Context)
    
    const photoAlbum = allPhotos.map((photo, i )=> (
        <Image
         key={photo.id}
        img = {photo}
        isFavorite = {photo.isFavorite}
        className={getClass(i)}
        />
    ))
    
    return (
        
        <main className="photos">
          {photoAlbum}
            
        </main>
    
    )
}

export default Photos