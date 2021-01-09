import React from "react";
import './InputBox.css';

class InputBox extends React.Component {

  render() {
    return (
        <div className="container">    
            <input type="text" class="type-1" />
            <input type="text" class="type-2" />
            <input type="text" class="type-3" />
        </div>
    );
  }
}

export default InputBox;
