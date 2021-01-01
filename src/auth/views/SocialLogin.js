import React from 'react';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import login from '../actions/login';
import updateLoginStatus from '../actions/updateLoginStatus';

import config from '../../shared/config';

import './SocialLogin.css';

class SocialLogin extends React.Component {
  componentWillMount() { }

  componentDidMount () { }

  successLogin (loginFrom, resp) {
    this.props.login({...resp});
    this.props.updateLoginStatus({
      successRedirect: true,
      failureRedirect: false,
      clientLogin: loginFrom
    });
  }

  failureLogin (loginFrom, e) {
    this.props.updateLoginStatus({
      successRedirect: false,
      failureRedirect: true,
      clientLogin: loginFrom
    });
  }

  render () {
    let googleBtnStyle = {
      display: 'inline-block',
      background: 'rgb(209, 72, 54)',
      color: 'rgb(255, 255, 255)',
      width: '100%',
      paddingTop: '10px',
      paddingBottom: '10px',
      borderRadius: '2px',
      border: '1px solid transparent',
      fontSize: '16px',
      fontWeight: 'bold'
    };

    return (
      <div className="social-login-view">
        <h3>Sign In</h3>
        <div className="social-login-item">
          <FacebookLogin
            appId={config.FACEBOOK_API_KEY}
            autoLoad={true}
            fields="name,email,picture"
            callback={(e) => this.successLogin('FACEBOOK', e)} />
        </div>
        <div className="social-login-item">
          <GoogleLogin
            clientId={config.GOOGLE_SIGN_IN_KEY}
            buttonText="Login with Google"
            style={googleBtnStyle}
            onSuccess={(e) => this.successLogin('GOOGLE', e)}
            onFailure={(e) => this.failureLogin('GOOGLE', e)}
          />
        </div>
        <div className="social-login-message-fail">
          {
            this.props.loginStatus.failureRedirect &&
            (
              <p>There was an error with { this.props.loginStatus.clientLogin } login. Please try again.</p>
            )
          }
        </div>
        {
          this.props.loginStatus.successRedirect &&
          <Redirect to="/dashboard/trips" />
        }
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    login: bindActionCreators(login, dispatch),
    updateLoginStatus: bindActionCreators(updateLoginStatus, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    loginStatus: state.profiles.loginStatus
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialLogin);
