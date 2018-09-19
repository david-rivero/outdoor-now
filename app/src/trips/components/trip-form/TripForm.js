import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import updateValueField from '../../actions/trip/updateValueField';
import createTrip from '../../actions/trip/createTrip';
import checkMembersSaved from '../../actions/member/checkMembersSaved';
import checkLocationsSaved from '../../actions/location/checkLocationsSaved';
import resetMembers from '../../actions/member/resetMembers';
import resetLocations from '../../actions/location/resetLocations';
import tripChecked from '../../actions/trip/tripChecked';

import ComposeInput from '../compose-input/ComposeInput';

import mapLocation from '../../../shared/icons/map-location.svg';
import mapCheckpoint from '../../../shared/icons/map.svg';
import users from '../../../shared/icons/users.svg';

import './TripForm.css';

class TripForm extends React.Component {
  componentDidMount () {
    this.props.checkMembersSaved();
    this.props.checkLocationsSaved();
    this.props.resetMembers();
    this.props.resetLocations();
  }

  updateField (field, ev) {
    let valueField = ev.target.value;
    this.props.updateValueField(field, valueField);
  }

  createTrip = (ev) => {
    ev.preventDefault();
    this.props.createTrip();
    this.props.tripChecked(true);
  }

  render () {
    let composeInputs = {};
    if (this.props.trip && this.props.trip.locationOrigin && this.props.trip.locationDestination && this.props.trip.checkpoints) {
      composeInputs = {
        locationOrigin: {
          name: "locationOrigin",
          linkTo: "/trips/create/origin",
          src: mapLocation,
          inputValue: `${this.props.trip.locationOrigin.name || 'None'} origin selected`
        },
        locationDestination: {
          name: "locationDestination",
          linkTo: "/trips/create/destination",
          src: mapLocation,
          inputValue: `${this.props.trip.locationDestination.name || 'None'} destination selected`
        },
        checkpoints: {
          name: "checkpoints",
          linkTo: "/trips/create/checkpoints",
          src: mapCheckpoint,
          inputValue: `${this.props.trip.checkpoints.length} checkpoints selected`
        },
        members: {
          name: "members",
          linkTo: "/trips/create/members",
          src: users,
          inputValue: `${this.props.trip.members.length} members selected`
        }
      };
    }
  
    return (
      <form className="create-trip-form">
        {
          !this.props.tripCheck && this.props.trip && this.props.trip.hasOwnProperty("name") &&
          <div>
            <div className="input-form">
              <label>Name</label>
              <div className="input-container">
                <input type="text" defaultValue={this.props.trip.name} 
                      onChange={(ev) => this.updateField('name', ev)} className="input" name="tripName"/>
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
              <input type="checkbox" name="isChallenge" defaultValue={this.props.trip.isChallenge}
                    onChange={(ev) => this.updateField('isChallenge', ev)} />
              <label className="checkbox-label">Is Challenge</label>
            </div>
            <div className="input-form-btn">
              <button className="btn" type="submit" onClick={this.createTrip}>Create</button>
            </div>
          </div>
        }
        {
          this.props.tripChecked &&
          <Redirect to="/dashboard/trips"></Redirect>
        }
      </form>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    updateValueField: bindActionCreators(updateValueField, dispatch),
    createTrip: bindActionCreators(createTrip, dispatch),
    checkMembersSaved: bindActionCreators(checkMembersSaved, dispatch),
    checkLocationsSaved: bindActionCreators(checkLocationsSaved, dispatch),
    resetMembers: bindActionCreators(resetMembers, dispatch),
    resetLocations: bindActionCreators(resetLocations, dispatch),
    tripChecked: bindActionCreators(tripChecked, dispatch)
  };
}

function mapStateToProps (state) {
  return {
    trip: state.trips.currentTrip,
    tripCheck: state.trips.tripCheck
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TripForm);
