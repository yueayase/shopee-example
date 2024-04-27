import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Container from '../common/Comtainer';
import Logo from '../../images/logo.png'
import AuthContext from '../auth/AuthContext';

const StyledHeader = styled.header`
    background-color: #d0011b;
    width: 100vw;
    padding: 16px 0px;
`;

const StyledHeaderSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Navigator = styled.div`
    a {
        margin: 0px 4px;
        color: white;
        text-decoration: none;
    }
`;

const Toolbar = styled.div`
    a {
        margin: 0px 6px;
        color: white;
        text-decoration: none;
    }
`;

const Box = styled.div`
    display: flex;
    align-items: center;
`;

const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = ({ className }) => {
    const { isAuthenticated, logout } = useContext(AuthContext);

    return (
        <StyledHeader className={className}>
            <Container>
                <StyledHeaderSection>
                    <Navigator>
                        <a href="#!">蝦皮購物</a>
                        <a href="#!">下載</a>
                        <a href="#!">追蹤我們</a>
                        <a href="#!">部落格</a>
                    </Navigator>
                    <Toolbar>
                        <a href="#!">通知</a>
                        <a href="#!">幫助中心</a>
                        {isAuthenticated ? (
                            <div>
                                <a href="#!">Kevin</a>
                                <span onClick={() => logout()}>登出</span>
                            </div>
                        ) : (
                            <Link to="/login">註冊/登入</Link>
                        )}
                        
                    </Toolbar>
                </StyledHeaderSection>
                <StyledHeaderSection>
                    <Link to="/">
                        <img src={Logo} alt="logo" height={36} />
                    </Link>
                    <Box>
                        <Search 
                            style={{ marginRight: 8 }}
                            placeholder="在商城搜尋" 
                            onSearch={onSearch} 
                            enterButton 
                        />
                        <Link to="/cart">
                            <ShoppingCartOutlined style={{ fontSize: '32px', color: 'white' }}/>
                        </Link>
                    </Box>
                </StyledHeaderSection>
            </Container>
        </StyledHeader>
    );
};

export default Header;