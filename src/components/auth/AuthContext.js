import React, { useEffect, useState } from 'react';

const defaultContextValue = {
    isAuthenticated: false
};

const AuthContext = React.createContext(defaultContextValue);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        defaultContextValue.isAuthenticated
    );
    const authStateKey = "shopee:auth.state";

    useEffect(() => {
        try {
            const authState = JSON.parse(localStorage.getItem(authStateKey));
            if (authState && authState.token) {
                setIsAuthenticated(true);
            }
        }
        catch (e) {
            console.log(e);
        }
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                isAuthenticated,
                login: async (username, password) => {
                    const token = "good_token";
                    if (username === "test") {
                        localStorage.setItem(
                            authStateKey, 
                            JSON.stringify({ token })
                        );
                        setIsAuthenticated(true);
                        return { token };
                    }

                    setIsAuthenticated(false);
                    return { token: null, error: "invalid password" };

                    // In real, maybe use
                    // fetch("/login") 
                    // axios("login")
                },
                logout: async () => {
                    setIsAuthenticated(false);
                    localStorage.removeItem(authStateKey);
                } 
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;