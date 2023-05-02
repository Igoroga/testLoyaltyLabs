import { Input, Checkbox, Button } from 'antd';
import React, { Dispatch, FC } from 'react';
import { Form } from 'antd';
import { useDispatch } from 'react-redux';
import AuthActionCreators from '../store/reducers/auth/actionCreators';
import { AuthAction } from '../store/reducers/auth/types';
import { useAppSelector, useAppDispatch } from '../hooks/useTypeSelector';

export type AppDispatch = Dispatch<AuthAction>;

const LoginForm: FC = () => {
    const dispatch = useDispatch();

    const submit = () => {
        dispatch(AuthActionCreators.login("myusername", "mypassword"));
      };


const onFinish = () => {
    submit()    
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;