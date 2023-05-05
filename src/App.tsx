import React, { useEffect } from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Layout from 'antd/es/layout';
import { useActions } from './hooks/useActions';
import { IUser } from './models/IUser';


function App(): JSX.Element {
  const {setAuth, setUser} = useActions()

useEffect(() => {
  if(localStorage.getItem('auth')){
    setAuth(true);
setUser({username: localStorage.getItem('username')} as IUser)
  }
})

  return (
    <Layout>
      <Layout.Content>
        <Navbar />
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;