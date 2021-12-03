import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';

import {Routes, Route} from 'react-router-dom'

function ContentRowCenter(){
    return (
        <div className="row">
            
         <Routes>
          <Route exact path="/lastMovie" element={<LastMovieInDb/>} />
            
          {/*<!-- End content row last movie in Data Base -->*/}
          
          {/*<!-- Genres in DB -->*/}
          <Route exact path="/genres" element={<GenresInDb/>} />
        
          
        </Routes>

        </div>
    )
}

export default ContentRowCenter;