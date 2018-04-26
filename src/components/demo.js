import React, { Component } from 'react';

function FancyBorder(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
}
function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
  
    );
}

export default WelcomeDialog;