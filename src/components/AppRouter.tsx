import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../router';

const AppRouter: React.FC = () => {
    const auth: boolean = true ;
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