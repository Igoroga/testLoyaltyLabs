import { Button, Calendar, Modal, Row } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { IEvent } from '../models/IEvent';
import EventForm from './EventForm';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { Badge } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CellRenderInfo } from 'rc-picker/lib/interface';
import { formatDate } from '../utils/dateRender';

interface EventCalendarProps {
    events: IEvent[];
}

const CalendarEvent : FC<EventCalendarProps> = () => {
const [modalVisible, setModalVisible] = useState(false)
const {fetchGuests,createEvent,fetchEvent} = useActions()
const {guests, events} = useTypedSelector(state => state.EventReducer)
const {user} = useTypedSelector(state => state.authReducer)

useEffect(() => {
    fetchGuests()
    fetchEvent(user.username)
}, [])

const addNewEvent = (event:IEvent) => {
    setModalVisible(false);
    createEvent(event)
}

const dateCellRender = (value: Dayjs) => {
    const listData = formatDate(value.toDate());
    const currentDayEvents = events.filter(ev=> ev.date === listData)
    return (
      <div>
        {currentDayEvents.map(ev=>
        <div key={ev.description}>{ev.description}</div>    
        )}
      </div>
    );
  };

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    if (info.type === 'date') return dateCellRender(current);
    
    return info.originNode;
  };

    return (
        <div style={{padding: '70px', background:'white'}}>
        <Calendar cellRender={cellRender}  />
        <Row justify='center'>
            <Button onClick={() => setModalVisible(true)}>Add Event</Button>
           </Row>
           <Modal  visible={modalVisible} footer={null} onCancel={ () => setModalVisible(false)}>
           <EventForm submit={addNewEvent}  guests={guests}/>
      </Modal>
        </div>
    );
};

export default CalendarEvent;