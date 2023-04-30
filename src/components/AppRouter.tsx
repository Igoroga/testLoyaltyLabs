import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../router';
import { useSelector } from 'react-redux';
import { useTypeSelector } from '../hooks/useTypeSelector';
import auth from '../store/reducers/auth';

const AppRouter: React.FC = () => {
  const {auth} = useTypeSelector(state=>state.authRuducer)
  




    return auth ? (
      <Routes>
        {privateRoutes.map((route) => (
          <Route 
          path={route.path} 
          element={<route.component />} 
          key={route.path} />
        ))}
        <Route
          path="*"
          element={<Navigate to='/' replace />}
      />
      </Routes>
    ) : (
      <Routes>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={<Login />} key={route.path} />
        ))}
        <Route
          path="/"
          element={<Navigate to='/login' replace />}
      />
      </Routes>
    );
  }

export default AppRouter;