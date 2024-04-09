import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../common/Comtainer';
import CVSLogo from '../../images/CVS_logo.jpeg';
import Remark from '../../images/remark.png';
import QRCode from '../../images/qrcode.png';

const StyledFooter = styled.footer`
    background-color: #fbfbfb;
    padding: 40px 0px;
`;

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: 33.33%;
    @media (min-width: 769px) {
        width: 20%;
    }

    a {
        color: rgba(0, 0, 0, .54);
        margin-bottom: 4px;
        text-decoration: none;
    }
`;

const FooterColumnTitle = styled.h4`
    font-weight: bold;
    margin-bottom: 12px;
`;

const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const AppRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
`;

const AppColumn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50%;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Box>
                    <FooterColumn>
                        <FooterColumnTitle>客服中心</FooterColumnTitle>
                        <Link to="#!">幫助中心</Link>
                        <Link to="#!">蝦皮商城</Link>
                        <Link to="#!">付款方式</Link>
                        <Link to="#!">蝦皮錢包</Link>
                        <Link to="#!">蝦幣</Link>
                        <Link to="#!">運費補助</Link>
                        <Link to="#!">退貨退款</Link>
                        <Link to="#!">延長訂單撥款</Link>
                        <Link to="#!">聯絡客服</Link>
                        <Link to="#!">防詐騙宣傳</Link>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>關於蝦皮</FooterColumnTitle>
                        <Link to="#!">關於蝦皮</Link>
                        <Link to="#!">加入我們</Link>
                        <Link to="#!">蝦皮條款</Link>
                        <Link to="#!">隱私權政策</Link>
                        <Link to="#!">蝦皮商城</Link>
                        <Link to="#!">賣家中心</Link>
                        <Link to="#!">限時特賣</Link>
                        <Link to="#!">聯絡媒體</Link>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>物流合作</FooterColumnTitle>
                        <img 
                            src={CVSLogo} 
                            alt="CVS_logo" 
                            width="100px" 
                            style={{ marginBottom: 12 }}
                        />
                        <FooterColumnTitle>蝦皮直送包裝減量標章</FooterColumnTitle>
                        <img 
                            src={Remark} 
                            alt="reamrk" 
                            width="100px" 
                            style={{ marginBottom: 12 }}
                        />
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>關注我們</FooterColumnTitle>
                        <Link to="#!">Facebook</Link>
                        <Link to="#!">Instagram</Link>
                        <Link to="#!">Line</Link>
                        <Link to="#!">LinkedIn</Link>
                        <Link to="#!">蝦品輯部落格</Link>
                    </FooterColumn>
                    <FooterColumn>
                        <FooterColumnTitle>下載蝦皮</FooterColumnTitle>
                        <Box>
                            <AppRow>
                                <img src={QRCode} alt="qr_code" width="75%"/>
                            </AppRow>
                            <AppRow>
                                <AppColumn>
                                    <Link to="#!">AppStore</Link>
                                </AppColumn>
                                <AppColumn>
                                    <Link to="#!">GooglePlay</Link>
                                </AppColumn>
                            </AppRow>
                        </Box>
                    </FooterColumn>
                </Box>
            </Container>
        </StyledFooter>
    );
};

export default Footer;