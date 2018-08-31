import React from 'react';
import TripMember from '../trip-member/TripMember';

export default class TripMembersAdd extends React.Component {
  render () {
    return (
      <div className="trip-members-add-view">
        <div className="trip-members-search"></div>
        <div className="trip-members-list">
          {
            this.props.members.map((member, index) => {
              return (<TripMember profile={member} key={index} />);
            })
          }
        </div>
      </div>
    )
  }
}
