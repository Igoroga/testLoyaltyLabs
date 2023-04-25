import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Layout from 'antd/es/layout';


function App(): JSX.Element {
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