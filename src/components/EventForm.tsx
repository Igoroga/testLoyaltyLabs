import { Input, Checkbox, Button, DatePicker, Row, Select } from 'antd';
import React, { FC, useState } from 'react';
import { Form } from 'antd';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Dayjs } from 'dayjs'
import { formatDate } from '../utils/dateRender';
import { useTypedSelector } from '../hooks/useTypeSelector';

interface EventFormProps {
    guests: IUser[]
}

const EventForm: FC<EventFormProps> = (props) => {
    const { Option } = Select;
    const {user} = useTypedSelector(state => state.authReducer)
    const [event, setEvent] = useState<IEvent>({
        author: '',
        guest: '',
        date: '',
        description:''  
    })



    const selectData = (date: Dayjs | null) => {
if(date){
    setEvent({...event, date: formatDate(date.toDate())})
}}

const submitForm = (date: Dayjs | null) => {
    console.log(event);
    }

 return (
     <Form
         name="basic"
         labelCol={{ span: 8 }}
         wrapperCol={{ span: 16 }}
         style={{ maxWidth: 800, marginTop: '30px' }}
         initialValues={{ remember: true }}
         onFinish={submitForm}
         // onFinishFailed={}
         autoComplete="off"
     >
         <h1 style={{ marginLeft: '25px', fontSize: "18px", marginBottom: "20px" }} >Add Event</h1>
         <Row justify='start'>
             <Form.Item
                 label="Event"
                 name="username1"
                 rules={[{ required: true, message: 'Please input your Event!' }]}
             >
                 <Input value={event.description}
                     onChange={e => setEvent({...event, description: e.target.value})} />
             </Form.Item>
         </Row>
         <Row justify='start'>
             <Form.Item label="Data"
                 name="username2"
                 style={{ marginLeft: "5px" }}
                 rules={[{ required: true, message: 'Please input your Event!' }]}>
                 <DatePicker
                 onChange={(date) => selectData(date)
                 }
                 style={{ marginLeft: "4px" }} />
             </Form.Item >
         </Row>
         <Row justify='start'>
             <Form.Item label="User"
                 name="username3"
                 style={{ marginLeft: "15px" }}
                 rules={[{ required: true, message: 'Please input your Event!' }]}>
                 <Select defaultValue="User" onChange={(guest) => setEvent({ ...event, guest:guest})} style={{ width: 120, marginLeft: "5px"  }} >
                     {props.guests.map(guest =>
                     <Option key={guest.username} value={guest.username}>{guest.username}</Option>
                        )}
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