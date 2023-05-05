import { Input, Checkbox, Button, DatePicker, Row, Select } from 'antd';
import React, { FC, useState } from 'react';
import { Form } from 'antd';

const EventForm: FC = () => {
    const { Option } = Select;

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800, marginTop: '30px' }}
            initialValues={{ remember: true }}
            // onFinish={}
            // onFinishFailed={}
            autoComplete="off"
        >
            <h1 style={{ marginLeft: '25px', fontSize: "18px", marginBottom: "20px" }} >Add Event</h1>
            <Row justify='start'>
                <Form.Item
                    label="Event"
                    name="username"
                    rules={[{ required: true, message: 'Please input your Event!' }]}
                >
                    <Input value={'123'}
                        onChange={e => e} />
                </Form.Item>
            </Row>
            <Row justify='start'>
                <Form.Item label="Data"
                    name="username"
                    style={{ marginLeft: "5px" }}
                    rules={[{ required: true, message: 'Please input your Event!' }]}>

                    <DatePicker style={{ marginLeft: "4px" }} />
                </Form.Item >
            </Row>
            <Row justify='start'>
                <Form.Item label="User"
                    name="username"
                    style={{ marginLeft: "15px" }}
                    rules={[{ required: true, message: 'Please input your Event!' }]}>
                    <Select defaultValue="lucy" style={{ width: 120, marginLeft: "5px"  }} >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select></Form.Item></Row>
            <Row justify='start'>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item></Row>
           
        </Form >
    );
};

export default EventForm;