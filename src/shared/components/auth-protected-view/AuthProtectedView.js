import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function AuthProtectedView (props) {
  return (
    <div>
      {
        !Object.keys(props.user).length &&
        <Redirect to="/login"></Redirect>
      }
    </div>
  );
}

function mapStateToProps (state) {
  return {
    user: state.profiles.currentUser
  };
}

export default connect(mapStateToProps)(AuthProtectedView);
