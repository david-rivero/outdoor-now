import React from 'react';
import { Redirect } from 'react-router-dom';

import config from '../shared/config';

import { GoogleSocialButton } from './components/SocialButton';

import './SocialLogin.css';
import logo from '../shared/icons/outdoor-now-full.svg';

class SocialLogin extends React.Component {
  state = {
    enableRedirect: false,
    currentProvider: ''
  };
  nodes = {};

  setNodeRef = (provider, node) => {
    if (node) {
      this.nodes[provider] = node;
    }
  }

  handleSocialLogin = (r) => {
    console.log(r);
    this.setState({
      enableRedirect: true
    });
  }

  handleSocialLoginFailure = err => {
    console.error(err)
  }

  componentWillUnmount = () => {
    this.setState({
      enableRedirect: false
    });
  }

  render() {
    const redirectDef = <Redirect to="/dashboard" />;
    const layoutRender = (
      <div className="social-login-view">
        <div className="social-login-logo">
          <img src={logo} alt="Outdoor Now" />
          <p>Plan your trip, explore and share</p>
        </div>
        <div className="social-login-buttons">
          <GoogleSocialButton className="social-login-button"
                              provider="google"
                              appId={config.GOOGLE_SIGN_IN_KEY}
                              onLoginSuccess={this.handleSocialLogin}
                              onLoginFailure={this.handleSocialLoginFailure}
                              getInstance={this.setNodeRef('google')}
                              key={'google'}
                              scope={'https://www.googleapis.com/auth/user.gender.read'} />
        </div>
      </div>
    );

    if (this.state.enableRedirect) {
      return redirectDef;
    }
    return layoutRender;
  }
}

export default SocialLogin;

