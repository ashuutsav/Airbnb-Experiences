import React from 'react';
import './card.css';
import star from '../images/star.png';

const card = (props) => {
  console.log(props);
  return (
    <div className="card-wrapper">
      <img className="card-image" src={props.img} alt="Katie Zaferes" />
      {(props.openSpots === 0 && (
        <div className="card-soldOut-wrapper">
          <p className="card-soldOut">SOLD OUT</p>
        </div>
      )) ||
        (props.location === 'Online' && (
          <div className="card-soldOut-wrapper">
            <p className="card-soldOut">Online</p>
          </div>
        ))}
      <div className="card-star">
        <img className="card-star-image" src={star} alt="stars" />
        <p className="card-star-p">
          {props.stats.rating}{' '}
          <span className="card-star-span">
            ({props.stats.reviewCount}).USA
          </span>
        </p>
      </div>

      <p className="card-course">{props.title}</p>
      <p>
        <span className="card-bold">From {`$${props.price}`}</span> / person
      </p>
    </div>
  );
};

export default card;
