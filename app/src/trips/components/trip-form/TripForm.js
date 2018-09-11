import React from 'react';
import { connect } from 'react-redux';

import ComposeInput from '../compose-input/ComposeInput';

import mapLocation from '../../../shared/icons/map-location.svg';
import mapCheckpoint from '../../../shared/icons/map.svg';
import users from '../../../shared/icons/users.svg';

import './TripForm.css';

export default function TripForm () {
  let composeInputs = {
    locationOrigin: {
      name: "locationOrigin",
      linkTo: "/trips/create/origin",
      src: mapLocation,
      inputValue: "None location selected"
    },
    locationDestination: {
      name: "locationDestination",
      linkTo: "/trips/create/destination",
      src: mapLocation,
      inputValue: "None location selected"
    },
    checkpoints: {
      name: "checkpoints",
      linkTo: "/trips/create/checkpoints",
      src: mapCheckpoint,
      inputValue: "0 checkpoints selected"
    },
    members: {
      name: "members",
      linkTo: "/trips/create/members",
      src: users,
      inputValue: "0 members selected"
    }
  };

  return (
    <form className="create-trip-form">
      <div className="input-form">
        <label>Name</label>
        <div className="input-container">
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
  );
}

function mapStateToProps (state, props) {
  return {};
}

// export default connect(mapStateToProps)(TripForm);
