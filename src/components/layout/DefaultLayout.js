import React from 'react';
import { styled, css } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Container from '../common/Comtainer';

// const PageHeader = styled.div`
//     ${(props) => 
//     props.fixed && 
//     css`
//         position: fixed;
//     `}
// `;

const PageHeader = styled(Header)`
    ${(props) => 
    props.fixed && 
    css`
        position: fixed;
    `}
`;

const DefaultLayout = ({fixedHeader, children}) => {
    return (
        <div>
            {/* <PageHeader fixed={fixedHeader}>
                <Header />
            </PageHeader> */}
            <PageHeader />
            <Container>{children}</Container>
            <Footer />
        </div>
    );
};

export default DefaultLayout;