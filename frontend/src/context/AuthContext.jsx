import React, { createContext, useState, useEffect } from 'react';
import { login as loginUser, register as registerUser } from "../api/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = async (credentials) => {
    const data = await loginUser(credentials);
    if (data) {
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
    }
    return data;
  };

  const register = async (userData) => {
    return registerUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
