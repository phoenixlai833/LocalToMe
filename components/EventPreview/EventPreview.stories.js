import EventPreview from "./index";


export default {
   title: 'EventPreview',
   component: EventPreview,
};

const eventPreview = {
   eventName: "Some Text",
   eventImage:
      "https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/foodBankImageTest.jpg?alt=media&token=37d44b9b-ac9d-48d7-8556-693c9a002fb0",
   eventContent: "Some Text",
   eventCreatorId: 1,
   start: "Nov 12, 2022, 12:00 PM - 3:00 PM",
   end: new Date(),
   eventLocation: "2909 Grandview Hwy, Vancouver, BC V5M 2E4",
   latitude: 49.25,
   longitude: -123,
   eventTags: [],
   eventContactPhone: "778-998-3422",
}


export const Template = () => <EventPreview event={eventPreview} />;
