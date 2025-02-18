import React from 'react';

import {StyledButton} from './index.style.ts';

const Button = (props) => {
    return (
        <StyledButton>
            {props.name}
        </StyledButton>
    );
}

export default Button;