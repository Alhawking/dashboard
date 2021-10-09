import React from 'react';
import img from '../assets/images/mandalorian.jpg'

function LastMovieInDb(){
    return(
        <div className="col-6 card shadow mb-4 p-0 me-3">
            <h3 className="card-header m-0 font-weight-bold text-gray-800 ">Last movie in Data Base</h3>
            <div className="container card-body">
                <img src={img} alt="Imagen de película" className="img-fluid px-3 px-sm-4 mt-3 mb-4 "/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                <a href="/" target="_blank" className="btn btn-danger">View movie datail</a>
            </div>
        </div>
    )
}

export default LastMovieInDb;