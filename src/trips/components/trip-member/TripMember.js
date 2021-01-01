import React from 'react';

import cross from '../../../shared/icons/cross.svg';
import './TripMember.css';

export default function TripMember (props) {
  return (
    <div className="trip-member">
      <figure className="trip-member-photo">
        <img src={props.profile.img} alt={props.profile.name} />
      </figure>
      <div className="trip-member-info">
        <div className="trip-member-name"><p>{ props.profile.name }</p></div>
        <div className="trip-member-desc"><p>{ props.profile.description }</p></div>
      </div>
      <div className="trip-remove-member" onClick={ props.removeMemberEv }>
        <img src={cross} alt="Remove" />
      </div>
    </div>
  );
}
