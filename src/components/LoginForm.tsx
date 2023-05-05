import { Input, Checkbox, Button } from 'antd';
import React, { FC, useState } from 'react';
import { Form } from 'antd';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';


const LoginForm: FC = () => {
    const { error, isLoading } = useTypedSelector(state => state.authRuducer);
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useActions()
    const { setError } = useActions()


    const submit = () => {
        login(username, password)
        console.log(username);
        console.log(password);

    }

    const errorSubmit = () => {
        console.log("Error");
    }

    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '22px' }}>Sorry, please try again</div>
                    <Button
                        type="primary"
                        htmlType="button"
                        style={{ marginTop: '50px', scale: '1.2' }}
                        onClick={e => setError("")}
                    >
                        Try again
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600}}
            initialValues={{ remember: true }}
            onFinish={submit}
            onFinishFailed={submit}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input value={username}
                    onChange={e => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"} />
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