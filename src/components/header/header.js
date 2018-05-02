import React from 'react';
import { Link } from "react-router-dom";
import hover from "hover.css";

import "./header.css";

export default class Header extends React.Component {
  render() {
    return (
        <div className="headerDiv">
                <h1 className="display-4">Byron Griffith</h1>
                <h3>Web Developer</h3>
      </div>
    );
  }
}
