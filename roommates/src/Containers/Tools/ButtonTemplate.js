import React from "react";
import './ButtonTemplate.css';

class ButtonTemplate extends React.Component {

  render() {
    return (
        <div class=".btntemplate">
        <a class="btn" margin={this.props.margin}>{this.props.text}</a>
        </div>
    );
  }
}

export default ButtonTemplate;
