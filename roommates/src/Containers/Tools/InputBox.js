import React from "react";
import './InputBox.css';

class InputBox extends React.Component {

  render() {
    return (
        <div className="inputbox">  
          <label>{this.props.label}</label>  
          <input type="text" class="box" placeholder={this.props.children} />
        </div>
    );
  }
}

export default InputBox;
