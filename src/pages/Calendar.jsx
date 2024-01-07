import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import { Header } from '../components';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from 'react';
import { token } from '../theme';


function Calendar() { 
  const [events, setEvents] = useState([]);
  //const today = new Date();
  const theme = useTheme();
  const colors = token(theme.palette.mode)
  
  function handleDateClick(info){
    const title = prompt("Enter new event");
    const calendarApi = info.view.calendar
    if(title){
      const newEvent = { title, date: info.dateStr}
      setEvents( events => [...events, newEvent]);

      calendarApi.addEvent({
        title,
        start: info.dateStr,
        allDay: true
      })
    }
    calendarApi.unselect();
  }

  function handleEventClick(info){
    if(window.confirm(`Are you sure you want to delete this event ${info.event.title}`)){
      info.event.remove();
    }

  }
  return (
    <Box>
      <Header title="CALENDAR" subtitle="Full calendar interactive page"/>
      <Box display="flex">
        <Box flex="1 1 20%" mt="1.5rem" mr="1rem">
          <List sx={{backgroundColor: colors.primary[400], textAlign: 'center', height:'100%', pt:"0"}}>
            <Typography variant="h3" sx={{backgroundColor: colors.greenAccent[500], textAlign: 'center'}}>Events</Typography>
            {
              events.map((event,i) => (
                <ListItem key={i}>
                  <ListItemText 
                    primary={event.title} 
                    sx={{color: colors.greenAccent[500], textAlign: 'center'}}
                  />
                </ListItem>
              ))
            }
          </List>
        </Box>
        <Box
          m="2rem 0"
          flex="1 1 100%"
        >
          <Fullcalendar
            plugins ={[ dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
            initialView= 'dayGridMonth'
            headerToolbar= {{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events)=>setEvents(events)}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar