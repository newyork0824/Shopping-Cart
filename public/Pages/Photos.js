import React, {useContext} from "react"
import Image from "../../src/components/Img"
import {getClass} from "../utils"
import {Context} from "../context"




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