import SingleEvent from "./index";

export default {
    title: "SingleEvent",
    component: SingleEvent
}

// const event = {
//     id: 'testing',
//     eventContactEmail: 'surreyfoodbank@gmail.com',
//     longitude: '-122.849136',
//     eventContactPhone: '604-581-5443',
//     latitude: ' 49.144341',
//     eventCreatorId: 1,
//     eventImage: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/SENIORS_DEPOT.jpeg?alt=media&token=c11545a5-50fb-4ccd-898d-b09849493cc1',
//     eventLocation: '13478 78 Ave, Surrey, BC V3W 8J6',
//     eventContent: 'Seniors Depot has a new day and time! Every second Monday, from 9:00 AM – 1:00 PM at the Newton Warehouse.  You must be a registered client to receive a food hamper. Please visit our client programs and registration requirements page for detailed information.  For more information about our Seniors Food Bank,  please contact our Client Services Manager at 604.581.5443 ext.105.',
//     eventName: 'SENIORS DEPOT',
//     eventDate: { seconds: 1669050000, nanoseconds: 17000000 }
// };

const event =
{
    id: 'pe0wd1EvBtJHuAWxS2Fv',
    eventCreatorId: '3',
    eventDate: { seconds: 1668222000, nanoseconds: 423000000 },
    eventLocation: 'Hard Rock Casino Vancouver, United Boulevard, Coquitlam, BC, Canada',
    eventContent: 'At a time when it feels the world is more divided, ECL Productions believes they have the solution with comedy and community.  The Hungry for Laughs Comedy tour is all about community. They believe through the power of laughter, love and giving they can bring people together and raise money for great local not for profits and all the hard work they do.  The Hungry For Laughs Comedy Tour features 3 professional comedians, a professional freestyle rapper and a professional foot archer. These acts have been featured on Netflix, Britains got Talent, Just for Laughs, MTV, Conan O’Brien, The Late Show with Stephan Colbert, MLB & NBA Halftime Shows, Cirque de Soliel and even for Her Majesty The Queen of England!  100% of the proceeds from this show will be going to the Greater Vancouver Food Bank!  Get your tickets today: https://www.hungryforlaughs.net',
    eventName: "Alex Mackenzie's hungry for laughs comedy show",
    latitude: '49.228950',
    eventImage: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/alexComedyShow.jpeg?alt=media&token=93b80bda-7b7f-49ea-9852-15b67569677c',
    longitude: '-122.848070',
    eventContactPhone: '7788900980',
    eventCategoryId: '3',
    eventContactEmail: 'info@eclproductions.com'
}



export const Default = () => <SingleEvent event={event} />
export const Error = () => <SingleEvent event={event} />