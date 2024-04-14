import React from 'react';
import DefaultLayout from '../components/layout/DefaultLayout';
import styled from 'styled-components';
import Container from '../components/common/Comtainer';
import { UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import LoginForm from '../components/auth/LoginForm';

const StyledLoginBox = styled.div`
    background-color: white;
`;

const StyledLoginContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    padding: 48px 0;
`;

const LoginPage = () => {
    return (
        <DefaultLayout>
            <StyledLoginBox>
                <StyledLoginContainer>
                    <div>
                        <img 
                            width="100"
                            src="https://images.unsplash.com/photo-1585327969772-17d7940f1a21?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="image"
                        />
                    </div>
                    <LoginForm />
                </StyledLoginContainer>
            </StyledLoginBox>
        </DefaultLayout>
    );
};

export default LoginPage;