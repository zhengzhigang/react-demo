import React, { Component } from 'react';

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(
          `Selected file - ${
            this.fileInput.files[0].name
          }`
        );
    }

    render() {
        return (
          <form
            onSubmit={this.handleSubmit}>
            <label>
              Upload file:
              <input
                type="file"
                ref={input => {
                  this.fileInput = input;
                }}
              />
            </label>
            <br />
            <button type="submit">
              Submit
            </button>
          </form>
        );
    }
} 
export default FileInput;