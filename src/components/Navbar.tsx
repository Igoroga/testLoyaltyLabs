import React, { FC } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import Logo from '../Ui/Logo';

const { Header } = Layout;

const Navbar: FC = () => {
    const auth = true;

    return (
 auth ? (
     <Header style={{ backgroundColor: 'rgb(0, 191, 255)' }}>
         <Row justify='end' align='middle'>
             <Col span={8}>
                 <div className='logo'><Logo /></div>
             </Col>
             <Col span={4}>
                 <Menu mode='horizontal' style={{ backgroundColor: 'transparent', color: 'white' }}>
                     <Menu.Item key='login'>Log In</Menu.Item>
                     <Menu.Item key='signup'>Sign Up</Menu.Item>
                 </Menu>
             </Col>
         </Row>
     </Header>
 ) : (
     <Header style={{ backgroundColor: 'rgb(0, 191, 255)' }}>
         <Row justify='end' align='middle'>
             <Col span={8}>
                 <div className='logo'><Logo /></div>
             </Col>
             <Col span={4}>
                 <Menu mode='horizontal' style={{ backgroundColor: 'transparent', color: 'white' }}>
                     <Menu.Item key='login'>Log In</Menu.Item>
                     <Menu.Item key='signup'>Sign Up</Menu.Item>
                 </Menu>
             </Col>
         </Row>
     </Header>
 )
);

    export default Navbar;