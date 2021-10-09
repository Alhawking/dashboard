import React from 'react';
const genres = ['Acción','Animación','Aventura','Ciencia Ficción','Comedia','Documental','Drama','Fantasía','Infantiles','Musical'];

function GenresInDb(){
    return(
        <div className="col card shadow mb-4 p-0">
            <h3 className="card-header m-0 font-weight-bold text-gray-800 ">Genres in Data Base</h3>
            <div className="row container pt-4">
            {genres.map(genre=><div className="col-6 card-body "><div className=" row card-body card bg-dark text-white shadow justify-content-center align-items-center">{genre}</div></div>)}
            </div>
        </div>
    )
}

export default GenresInDb;