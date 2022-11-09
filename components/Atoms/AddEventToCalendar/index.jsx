import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

export default function AddEventToCalendar() {

    const event = {
        title: 'My Event',
        description: 'This is the event description',
        location: 'Portland, OR',
        startTime: '2016-09-16T20:15:00-04:00',
        endTime: '2016-09-16T21:45:00-04:00'
    };

    let items = [
        { apple: 'Apple Calendar' },
        { google: 'Google' },
        { yahoo: 'Yahoo' },
        { outlook: 'Outlook' },
        { outlookcom: 'Outlook.com' },
    ];

    const icon = { 'fa-light fa-calendar': 'left' };

    return (
        <>

            <AddToCalendar event={event} buttonTemplate={icon} buttonLabel="Add to calendar" listItems={items} />
        </>
    );


}





//==================================================================================================
// import React from 'react'; 
// import AddToCalendar from 'react-add-to-calendar';
//  class Example extends React.Component {
//      static displayName = 'Example'; 
//      state = { event: 
//         { title: 'Sample Event', 
//         description: 'This is the sample event provided as an example only', 
//         location: 'Portland, OR', 
//         startTime: '2016-09-16T20:15:00-04:00', 
//         endTime: '2016-09-16T21:45:00-04:00' } 
//     }; 
    
//     render() { return <AddToCalendar event={this.state.event} />; }; 
// }

//way2
//================================================================================

// import React from "react";
// import { atcb_init } from "add-to-calendar-button";
// import 'add-to-calendar-button/assets/css/atcb.css';

// export default function MyComponent() {
//     React.useEffect(() => { atcb_init() }, []);
//     return (
//         <div className="atcb">
//             {'{'}
//             "name":"Add the title of your event",
//             "description":"A nice description does not hurt",
//             "startDate":"2022-02-21",
//             "endDate":"2022-03-24",
//             "startTime":"10:13",
//             "endTime":"17:57",
//             "location":"Somewhere over the rainbow",
//             "label":"Add to Calendar",
//             "options":[
//             "Apple",
//             "Google",
//             "iCal",
//             "Microsoft365",
//             "Outlook.com",
//             "Yahoo"
//             ],
//             "timeZone":"Europe/Berlin",
//             "iCalFileName":"Reminder-Event"
//             {'}'}
//         </div>
//     );
// }