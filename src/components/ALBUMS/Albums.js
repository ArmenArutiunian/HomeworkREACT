import {useEffect, useState} from "react";
import {albumsService} from "../../services/albumsService";
import Album from "./Album";







function Albums() {
  let [albums, setAlbums] = useState([])

  useEffect(() => {
      albumsService().then(value => setAlbums(value.data))
  })



return(
    <div>
        {albums.map((album,index) => <Album album={album}
                                            index={albums.id}/>)}
    </div>
)}

export default Albums ;

        //
        // {/*{albums.map((album,index) => <Album album={album}*/}
        // {/*                                 index={albums.id}/>)}*/}


// 1 створити ще папку  з коментами
// 2 закінчити ДЗ (Там ізі)