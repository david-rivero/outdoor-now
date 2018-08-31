import React from 'react';
import ComposeInput from '../../components/compose-input/ComposeInput';

import './CreateTrip.css';

import logo from '../../../shared/icons/outdoor-now.svg';
import mapLocation from '../../../shared/icons/map-location.svg';
import mapCheckpoint from '../../../shared/icons/map.svg';
import users from '../../../shared/icons/users.svg';

export default function CreateTrip () {
  let composeInputs = {
    locationOrigin: {
      name: "locationOrigin",
      linkTo: "/trips/origin/add",
      src: mapLocation,
      inputValue: "None location selected"
    },
    locationDestination: {
      name: "locationDestination",
      linkTo: "/trips/destination/add",
      src: mapLocation,
      inputValue: "None location selected"
    },
    checkpoints: {
      name: "checkpoints",
      linkTo: "/trips/checkpoints",
      src: mapCheckpoint,
      inputValue: "0 checkpoints selected"
    },
    members: {
      name: "members",
      linkTo: "/trips/members",
      src: users,
      inputValue: "0 members selected"
    }
  };

  return (
    <div className="create-trip-view">
      <figure className="create-trip-logo">
        <img src={logo} alt="Logo" />
        <figcaption>New Trip</figcaption>
      </figure>
      <div className="create-trip-form-container">
        <form className="create-trip-form">
          <div className="input-form">
            <label>Name</label>
            <div>
              <input type="text" className="input" name="tripName"/>
            </div>
          </div>
          <div className="input-form">
            <label>Origin</label>
            <ComposeInput name={composeInputs.locationOrigin.name}
                          linkTo={composeInputs.locationOrigin.linkTo}
                          src={composeInputs.locationOrigin.src}
                          inputValue={composeInputs.locationOrigin.inputValue} />
          </div>
          <div className="input-form">
            <label>Destination</label>
            <ComposeInput name={composeInputs.locationDestination.name}
                          linkTo={composeInputs.locationDestination.linkTo}
                          src={composeInputs.locationDestination.src}
                          inputValue={composeInputs.locationDestination.inputValue} />
          </div>
          <div className="input-form">
            <label>Checkpoints</label>
            <ComposeInput name={composeInputs.checkpoints.name}
                          linkTo={composeInputs.checkpoints.linkTo}
                          src={composeInputs.checkpoints.src}
                          inputValue={composeInputs.checkpoints.inputValue} />
          </div>
          <div className="input-form">
            <label>Members</label>
            <ComposeInput name={composeInputs.members.name}
                          linkTo={composeInputs.members.linkTo}
                          src={composeInputs.members.src}
                          inputValue={composeInputs.members.inputValue} />
          </div>
          <div className="input-form">
            <input type="checkbox" name="isChallenge" />
            <label className="checkbox-label">Is Challenge</label>
          </div>
          <div className="input-form-btn">
            <button className="btn" type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
