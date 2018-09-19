import React from 'react';

import { Link } from 'react-router-dom';
import './ComposeInput.css';


export default function ComposeInput (props) {
  return (
    <div className="compose-input">
      <input type="text" name={props.name} disabled="disabled" defaultValue={props.inputValue} />
      <div className="compose-input-icon">
        <Link to={props.linkTo}>
          <img src={props.src} alt={props.name} />
        </Link>
      </div>
    </div>
  )
}
