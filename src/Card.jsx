import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto '>

                <div className="card h-100" >
                    <img src={props.imgsrc} className="card-img-top img-fluid " alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h4 className="card-title font-weight-bold extra-bold">{props.title}</h4>
                        <p className="card-text flex-grow-1 overflow-auto">{props.des}</p>
                        <NavLink to={props.link} className="btn btn-primary mt-auto">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;