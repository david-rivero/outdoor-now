import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import addMember from '../../actions/member/addMember';
import displayMembersFiltered from '../../actions/member/displayMembersFiltered';
import loadProfiles from '../../actions/member/loadProfiles';
import hideMemberResults from '../../actions/member/hideMemberResults';
import removeMemberFromTrip from '../../actions/member/removeMemberFromTrip';
import saveMembersOnTrip from '../../actions/member/saveMembersOnTrip';
import checkMembersSaved from '../../actions/member/checkMembersSaved';

import TripMember from '../trip-member/TripMember';
import TripMemberResult from '../trip-member-result/TripMemberResult';

import searchIcon from '../../../shared/icons/search.svg';
import './TripMembersAdd.css';

import profiles from '../../../shared/mocks/profiles.json';

class TripMembersAdd extends React.Component {
  componentWillMount = () => this.props.loadProfiles(profiles, this.props.tripMembers)

  getMemberResultsFiltered = (ev) => this.props.displayMembersFiltered(ev.target.value)

  selectMember = (member, _) => {
    this.props.hideMemberResults();
    this.props.addMember(member);
    this.props.loadProfiles(profiles);
  }

  removeMember = (index, _) => this.props.removeMemberFromTrip(index)

  saveMembersOnTrip = () => {
    this.props.saveMembersOnTrip(this.props.members);
    this.props.checkMembersSaved(true);
  }

  render () {
    return (
      <div className="trip-members-add-view">
      {
        !this.props.saveCheck && 
        <div>
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
              this.props.displayResult &&
              (
                this.props.membersFound.map((member, index) => {
                  return (<TripMemberResult selectMemberResult={(ev) => this.selectMember(member, ev)} 
                                            profile={member} key={index} />);
                })
              )
            }
          </div>
          <div className="trip-members-list">
            {
              this.props.members.length && this.props.members.map((member, index) => {
                return (<TripMember profile={member}
                                    removeMemberEv={(ev) => this.removeMember(index, ev)}
                                    key={index} />);
              })
            }
          </div>
          <div className="save-members-trip-submit">
            <button className="btn" type="submit" onClick={this.saveMembersOnTrip}>Save members</button>
          </div>
        </div>
      }
      {
        this.props.saveCheck && 
        <Redirect to="/trips/create"></Redirect>
      }
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addMember: bindActionCreators(addMember, dispatch),
    saveMembersOnTrip: bindActionCreators(saveMembersOnTrip, dispatch),
    displayMembersFiltered: bindActionCreators(displayMembersFiltered, dispatch),
    loadProfiles: bindActionCreators(loadProfiles, dispatch),
    hideMemberResults: bindActionCreators(hideMemberResults, dispatch),
    removeMemberFromTrip: bindActionCreators(removeMemberFromTrip, dispatch),
    checkMembersSaved: bindActionCreators(checkMembersSaved, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    membersFound: state.profiles.membersFound,
    members: state.profiles.members,
    displayResult: state.profiles.displayResult,
    saveCheck: state.profiles.saveCheck,
    tripMembers: state.trips.currentTrip.members
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TripMembersAdd);
