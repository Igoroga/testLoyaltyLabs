import { Button, Calendar, Modal, Row } from 'antd';
import React, { FC, useState } from 'react';
import { IEvent } from '../models/IEvent';
import EventForm from './EventForm';

interface EventCalendarProps {
    events: IEvent[];
}

const CalendarEvent : FC<EventCalendarProps> = () => {
const [modalVisible, setModalVisible] = useState(false)

    return (
        <div style={{padding: '70px', background:'white'}}> 
        <Calendar  />
        <Row justify='center'>
            <Button onClick={() => setModalVisible(true)}>Add Event</Button>
           </Row>
           <Modal  visible={modalVisible} footer={null} onCancel={ () => setModalVisible(false)}>
           <EventForm/>
      </Modal>
        </div>
    );
};

export default CalendarEvent;