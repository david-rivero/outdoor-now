import React from 'react';
import TripMember from '../trip-member/TripMember';
import TripMemberResult from '../trip-member-result/TripMemberResult';

import searchIcon from '../../../shared/icons/search.svg';
import './TripMembersAdd.css';

import profiles from '../../../shared/mocks/profiles.json';

export default class TripMembersAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      profiles: profiles,
      membersSearchFiltered: [],
      members: [],
      displaySearchSuggestion: false
    };
  }

  getMemberResultsFiltered = (ev) => {
    let textSearch = ev.target.value;
    let membersFiltered = [];
    let enableDisplay = false;

    if (textSearch) {
      membersFiltered = this.state.profiles.filter((member) => {
        return member.name.indexOf(textSearch) !== -1;
      });
      enableDisplay = true;
    }

    this.setState({
      membersSearchFiltered: membersFiltered,
      displaySearchSuggestion: enableDisplay
    });
  }

  selectMember = (member, ev) => {
    let members = this.state.members;
    members.push(member);

    this.setState({
      members: members,
      displaySearchSuggestion: false,
      membersSearchFiltered: []
    });
  }

  removeMember = (index, ev) => {

  }

  render () {
    return (
      <div className="trip-members-add-view">
        <div className="trip-members-search">
          <input type="search" name="members" onChange={this.getMemberResultsFiltered} />
          <button className="trip-members-search-icon">
            <svg viewBox="0 0 32 32">
              <use xlinkHref={`${searchIcon}#searchIcon`}></use>
            </svg>
          </button>
        </div>
        <div className="trip-members-search-result">
          {
            this.state.displaySearchSuggestion &&
            (
              this.state.membersSearchFiltered.map((member, index) => {
                return (<TripMemberResult selectMemberResult={(ev) => this.selectMember(member, ev)} profile={member} key={index} />);
              })
            )
          }
        </div>
        <div className="trip-members-list">
          {
            this.state.members.length && this.state.members.map((member, index) => {
              return (<TripMember profile={member} removeMemberEv={this.removeMember} key={index} />);
            })
          }
        </div>
      </div>
    )
  }
}
