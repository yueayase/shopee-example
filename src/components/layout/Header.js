import React from 'react';
import styled from 'styled-components';
import Container from '../common/Comtainer';

const StyledHeader = styled.header`
    background-color: #d0011b;
    width: 100vw;
    height: 200px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Container>
            This is a fixed header
            </Container>
        </StyledHeader>
    );
};

export default Header;