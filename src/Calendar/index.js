import React from 'react';
import '../calendar.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';



BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))


const MyCalendar = (props)=> {


    return (

      <div id="calendar">
        <BigCalendar
        events={props.events}
        views={['month']}
        defaultDate={new Date()}
        onSelectEvent={(e)=>{props.eventSelect(e)}}
        />
      </div>
    )
};

export default MyCalendar;
