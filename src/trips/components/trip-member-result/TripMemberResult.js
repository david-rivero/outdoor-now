import React from 'react';
import './TripMemberResult.css';

export default function TripMemberResult (props) {
  return (
    <div className="trip-member-result-item" onClick={props.selectMemberResult}>
      <figure className="trip-member-result-pict">
        <img src={props.profile.img} alt={props.profile.name} />
      </figure>
      <div className="trip-member-result-info">
        <div className="trip-member-result-name"><p>{ props.profile.name }</p></div>
        <div className="trip-member-result-desc"><p>{ props.profile.description }</p></div>
      </div>
    </div>
  )
}
