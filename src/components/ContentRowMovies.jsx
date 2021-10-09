import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm,faAward,faUser } from '@fortawesome/free-solid-svg-icons'
const elements = [
    {
        title:'Total Movies',
        icon:faFilm,
        data:21,
    },
    {
        title:'Total Awards',
        icon:faAward,
        data:79,
    },
    {
        title:'Actors quantity',
        icon:faUser,
        data:49,
    }
]

const color = ['primary','success','warning'];
let colorSelected;

function ContentMovies(){
    return(
        <div className="row container my-4">
            {elements.map((element,i)=> {
                colorSelected = color[i];
                const className = `col row align-items-center shadow py-2 me-4 border border-4 border-${colorSelected} rounded border-top-0 border-end-0 border-bottom-0`;
                const className2 = `text-${colorSelected} col-9 row align-items-center text-uppercase font-weight-bold`
                return <div  className={className}>
                <p className={className2}>{element.title}
                    <p className="mt-2 text-dark font-weight-bold text-gray-800">{element.data}</p>
                </p>
                <FontAwesomeIcon icon={element.icon}  className="col text-gray-300 h-50"/>
            </div>})}
        </div>
    )
}

export default ContentMovies;