import React from 'react';

import cross from '../../../shared/icons/cross.svg';

export default function TripMember (props) {
  return (
    <div className="trip-member">
      <figure className="trip-member-photo">
        <img src={props.profile.src} />
      </figure>
      <div className="trip-member-info">
        <div className="trip-member-name"><p>{ props.profile.name }</p></div>
        <div className="trip-member-desc"><p>{ props.profile.desc }</p></div>
      </div>
      <div className="removeMember">
        <img src={cross} alt="Remove" />
      </div>
    </div>
  );
}
