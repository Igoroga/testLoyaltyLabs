import { Layout, Row } from 'antd';
import React, { FC } from 'react';
import LoginForm from '../components/LoginForm';

const Login: FC = () => {
    return (
        <>
            <Layout>
            <Row justify='center' align='middle' className='h0'>
            <div style={{fontSize:'18px', color:'red'}}> For test      "username": "user",
                        "password": "123"

                        "username": "admin",
                        "password": "123"

                        "username": "Igor",
                        "password": "123"
                        </div>
                </Row>
                <Row justify='center' align='middle' className='h100'>
                    
                    <LoginForm></LoginForm>
                </Row>
            </Layout>
        </>
    );
};

export default Login;