import React from 'react';
import './TripLocationMenu.css';

export default class TripLocationMenu extends React.Component {
  render () {
    return (
      <div className="trip-location-menu-container">
        {
          this.props.displayTripMenu && (
            <div className="trip-location-menu">
              <div className="trip-location-pointer"></div> 
              {
                (this.props.singleLocation && (<div className="trip-location-menu-text" onClick={this.props.onSelectLocation}>Select location</div>)) || 
                (this.props.multipleLocations && (<div className="trip-location-menu-text" onClick={this.props.onSelectLocation}>Select current location</div>))
              }
            </div>
          )
        }
      </div>
    );
  }
}
