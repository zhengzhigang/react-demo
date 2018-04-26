import React, { Component } from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.focus = this.focus.bind(this);
      this.state = {name:1}
    }
  
    focus() {
      // 通过使用原生API，显式地聚焦text输入框
      this.aa.focus();
      console.log(this.aa.value)
    }

    componentDidMount () {
        this.setState((prevState, props) => {
            console.log('=======',prevState)
            return {counter: prevState.name + props.step};
        });
    }
  
    render() {
      // 在实例中通过使用`ref`回调函数来存储text输入框的DOM元素引用(例如:this.textInput)
      return (
        <div>
          <input
            type="text"
            ref={(input) => { this.aa = input; }} />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focus}
          />
        </div>
      );
    }
}

export default CustomTextInput;