import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import AuthContext from "./AuthContext";

const LoginForm = () => {
    const navigate = useNavigate();
    const { login, isAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // call login api
        login(username, password).then(({ token, error }) => {
            // failed login
            if(!token) {
                message.error(error);
            }
        });
    };

    useEffect(() => {
        isAuthenticated &&  navigate("/");
    }, [isAuthenticated]);
    
    return (
        <div>
            <Input 
                style={{marginBottom: 3}} 
                size="large" 
                placeholder="請輸入帳號" 
                prefix={<UserOutlined />} 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <Input 
                style={{marginBottom: 3}} 
                type="password" 
                size="large" 
                placeholder="請輸入密碼" 
                prefix={<LockOutlined />} 
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>登入</Button>
        </div>
    );
};

export default LoginForm;