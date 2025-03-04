import React from 'react';

import './index.css'

const ErrorMessage = ({message}) => {
    return (
        <div className="err-msg">
            {message}
        </div>
    );
}

export default ErrorMessage;