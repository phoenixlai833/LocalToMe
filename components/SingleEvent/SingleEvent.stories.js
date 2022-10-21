import SingleEvent from "./index";

export default {
    title: "SingleEvent",
    component: SingleEvent
}

const event = {
    id: 'testing',
    eventContactEmail: 'surreyfoodbank@gmail.com',
    longitude: '-122.849136',
    eventContactPhone: '604-581-5443',
    latitude: ' 49.144341',
    eventCreatorId: 1,
    eventImage: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/SENIORS_DEPOT.jpeg?alt=media&token=c11545a5-50fb-4ccd-898d-b09849493cc1',
    eventLocation: '13478 78 Ave, Surrey, BC V3W 8J6',
    eventContent: 'Seniors Depot has a new day and time! Every second Monday, from 9:00 AM – 1:00 PM at the Newton Warehouse.  You must be a registered client to receive a food hamper. Please visit our client programs and registration requirements page for detailed information.  For more information about our Seniors Food Bank,  please contact our Client Services Manager at 604.581.5443 ext.105.',
    eventName: 'SENIORS DEPOT',
    eventDate: { seconds: 1669050000, nanoseconds: 17000000 }
};

export const Default = () => <SingleEvent singleE={event} />
export const Error = () => <SingleEvent singleE={event} />