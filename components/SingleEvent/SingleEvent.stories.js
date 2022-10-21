import SingleEvent from "./index";

export default {
    title: "SingleEvent",
    component: SingleEvent
}


// const event = [{
//     eventContactEmail:
//         { stringValue: "surreyfoodbank@gmail.com" }, eventContactPhone: { stringValue: "604-581-5443" }, eventContent: {stringValue: "Seniors Depot has a new day and time! Every second Monday, from 9:00 AM – 1:00 PM at the Newton Warehouse. You must be a registered client to receive a food hamper. Please visit our client programs and registration requirements page for detailed information. For more information about our Seniors Food Bank, please contact our Client Services Manager at 604.581.5443 ext.105."}, eventCreatorId: 1, eventDate: "November 21, 2022 at 9: 00: 00 AM UTC - 8", eventImage: "https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/SENIORS_DEPOT.jpeg?alt=media&token=c11545a5-50fb-4ccd-898d-b09849493cc1", eventLocation: "13478 78 Ave, Surrey, BC V3W 8J6", eventName: "SENIORS DEPOT", latitude: "49.144341", longitude: "-122.849136"
// }]

export const Default = () => <SingleEvent  />
export const Error = () => <SingleEvent  />