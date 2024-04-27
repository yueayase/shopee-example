import React from 'react';
import { styled, css } from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import Container from '../common/Comtainer';

// const PageHeader = styled.div`
//     ${(props) => 
//         props.fixed && 
//         css`
//             z-index: 1;
//             position: fixed;
//         `}
// `;

// not work
const PageHeader = styled(Header)`
    ${(props) => 
        props.fixed && 
        css`
            z-index: 1;
            position: fixed;
        `}
`;

const DefaultLayout = ({fixedHeader, children}) => {
    return (
        <div>
            {/* <PageHeader fixed={fixedHeader}>
                <Header />
            </PageHeader> */}
            <PageHeader fixed={fixedHeader} />
            <Container>{children}</Container>
            <Footer />
        </div>
    );
};

export default DefaultLayout;