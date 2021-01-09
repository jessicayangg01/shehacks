import React from "react";
import './ButtonTemplate.css';

class ButtonTemplate extends React.Component {

  render() {
    return (
        <div class=".btntemplate">
        <a class="btn">{this.props.text}</a>
        </div>
    );
  }
}

export default ButtonTemplate;
