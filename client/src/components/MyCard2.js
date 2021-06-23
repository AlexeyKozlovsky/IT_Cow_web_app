import React, { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { ROOT_ROUTE } from '../utils/consts';
import './MyCard2.css'

export default function MyCard2({title, img, desc}) {
    const [clicked, setClicked] = useState(false);

    if (!clicked) {
        return (
            <div className="container" style={{ backgroundImage: `url(${img})` }}
                onMouseEnter={() => setClicked(true)}
                onMouseLeave={() => setClicked(false)}>
                <div className="title">
                    <p className="title__text">{title}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container" style={{ backgroundImage: `url(${img})` }} 
                onMouseEnter={() => setClicked(true)}
                onMouseLeave={() => setClicked(false)}
                onLoad={() => console.log("LOADED IMAGE")}>
                <div className="title">
                    <p className="title__text">{title}</p>
                </div>
                <LinkContainer to={ROOT_ROUTE}>
                    <div className="desc">
                            <p>{desc}</p>
                    </div>
                </LinkContainer>
                
            </div>
        )
    }
    
}

