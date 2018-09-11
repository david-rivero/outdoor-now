import React from 'react';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

import config from '../../shared/config';

import './SocialLogin.css';

export default class SocialLogin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loginFailed: false,
      successRedirect: false
    };
  }

  successLogin (loginFrom) {
    this.setState({
      loginFailed: false,
      successRedirect: true
    });
  }

  failureLogin (loginFrom) {
    this.setState({
      loginFailed: loginFrom,
      successRedirect: false
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
            callback={() => this.successLogin('FACEBOOK')} />
        </div>
        <div className="social-login-item">
          <GoogleLogin
            clientId={config.GOOGLE_SIGN_IN_KEY}
            buttonText="Login with Google"
            style={googleBtnStyle}
            onSuccess={() => this.successLogin('GOOGLE')}
            onFailure={() => this.failureLogin('GOOGLE')}
          />
        </div>
        <div className="social-login-message-fail">
          {
            this.state.loginFailed &&
            (
              <p>There was an error with { this.state.loginFailed } login. Please try again.</p>
            )
          }
        </div>
        {
          this.state.successRedirect &&
          <Redirect to="/dashboard/trips" />
        }
      </div>
    );
  }
}
