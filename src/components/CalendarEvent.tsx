import { Button, Calendar, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { IEvent } from '../models/IEvent';
import EventForm from './EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

interface EventCalendarProps {
    events: IEvent[];
}

const CalendarEvent : FC<EventCalendarProps> = () => {
const [modalVisible, setModalVisible] = useState(false)
const {fetchGuests} = useActions()
const {guests} = useTypedSelector(state => state.EventReducer)


useEffect(() => {
    fetchGuests()
}, [])



    return (
        <div style={{padding: '70px', background:'white'}}> 
        <Calendar  />
        <Row justify='center'>
            <Button onClick={() => setModalVisible(true)}>Add Event</Button>
           </Row>
           <Modal  visible={modalVisible} footer={null} onCancel={ () => setModalVisible(false)}>
           <EventForm guests={guests}/>
      </Modal>
        </div>
    );
};

export default CalendarEvent;