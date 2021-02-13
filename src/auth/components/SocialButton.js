import React from 'react';

import SocialLogin from 'react-social-login';

import {
  GoogleLoginButton
} from 'react-social-login-buttons';

import './SocialButton.css';

class SocialButton extends React.Component {
  getComponent = () => {}

  render() {
    return this.getComponent();
  }
}

class GoogleButton extends SocialButton {
  getComponent = () => {
    return (
      <GoogleLoginButton className="social-btn"
                         onClick={this.props.triggerLogin}
                         {...this.props} />
    )
  }
}

export const GoogleSocialButton = SocialLogin(GoogleButton);
