import React, { FC } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import Logo from '../Ui/Logo';

import { useTypeSelector } from '../hooks/useTypeSelector';

const { Header } = Layout;

const Navbar: FC = () => {
    const {auth} = useTypeSelector(state=>state.authRuducer)


    return (
 auth ? (
     <Header style={{ backgroundColor: 'rgb(0, 191, 255)' }}>
         <Row justify='end' align='middle'>
             <Col span={8}>
                 <div className='logo'><Logo /></div>
             </Col>
             <Col span={4}>
                 <Menu mode='horizontal' style={{ backgroundColor: 'transparent', color: 'white' }}>
                     <Menu.Item key='login'>Profile</Menu.Item>
                     <Menu.Item key='signup'>Sign Out</Menu.Item>
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
}

    export default Navbar;