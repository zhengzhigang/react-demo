import React, { Component } from 'react';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

function Element(props) {
    return (
        <h1>
            Hello, {props.user.firstNmae + ' ' + props.user.lastName}!
        </h1>
    );
}

export default Element;
