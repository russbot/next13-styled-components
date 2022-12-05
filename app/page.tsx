'use client'
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledHello = styled.div<{ clicked: boolean }>`
    color: white;
    cursor: pointer;
    background-color: black;
    padding: 10px;

    ${({ clicked }) => clicked && `background-color: red;`}
`;

export default function Homepage() {
    const [clicked, setClicked] = useState<boolean>(false);

    return (
        <StyledHello
            clicked={clicked}
            onClick={() => setClicked(!clicked)}
        >
            hello
        </StyledHello>
    );
}