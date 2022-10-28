import EventsList from "./index";

export default {
    title: "Organisms/EventsList",
    component: EventsList
}

const eventList = [
    {
        id: 'testing1',
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
    },
    {
        id: 'testing2',
        eventLocation: '11300 84 Avenue Delta, BC V4C 2L8',
        eventDate: { seconds: 1666112400, nanoseconds: 91000000 },
        longitude: '-122.909821',
        eventCategoryId: 1,
        eventCreatorId: 1,
        eventName: 'FOOD DISTRIBUTION – NORTH DELTA',
        eventContent: 'North Delta Depot is now open!  The Surrey Food Bank distributes food in North Delta every 2nd Tuesday from 10:00 a.m. to noon at the Northside Community Church.  You must be a registered client to receive a food hamper. Please visit our client programs and registration requirements page for detailed information.  For more information about our Cloverdale Food Bank please contact our Client Services Manager at 604.581.5443 ext.105.',
        eventContactPhone: '604-581-5443',
        latitude: '49.155571',
        eventImage: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/food_disctribution.jpeg?alt=media&token=99c4acb7-5129-41e9-bd7a-388e62daddd9',
        eventContactEmail: 'surreyfoodbank@gmail.com'
    },
    {
        id: 'testing3',
        eventDate: { seconds: 1668222000, nanoseconds: 423000000 },
        longitude: '-122.848070',
        eventContactEmail: 'info@eclproductions.com',
        eventCreatorId: '3',
        latitude: '49.228950',
        eventCategoryId: '3',
        eventLocation: 'Hard Rock Casino Vancouver, United Boulevard, Coquitlam, BC, Canada',
        eventContent: 'At a time when it feels the world is more divided, ECL Productions believes they have the solution with comedy and community.  The Hungry for Laughs Comedy tour is all about community. They believe through the power of laughter, love and giving they can bring people together and raise money for great local not for profits and all the hard work they do.  The Hungry For Laughs Comedy Tour features 3 professional comedians, a professional freestyle rapper and a professional foot archer. These acts have been featured on Netflix, Britains got Talent, Just for Laughs, MTV, Conan O’Brien, The Late Show with Stephan Colbert, MLB & NBA Halftime Shows, Cirque de Soliel and even for Her Majesty The Queen of England!  100% of the proceeds from this show will be going to the Greater Vancouver Food Bank!  Get your tickets today: https://www.hungryforlaughs.net',
        eventName: "Alex Mackenzie's hungry for laughs comedy show",
        eventContactPhone: '7788900980',
        eventImage: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/alexComedyShow.jpeg?alt=media&token=93b80bda-7b7f-49ea-9852-15b67569677c'
    },
    {
        id: 'testing4',
        eventCreatorId: '3',
        eventContent: 'The Diwali festival is one of the most festive celebrations for the South Asian community and all over the world. V4U Entertainment organized a hugely successful Diwali event in Vancouver last year accommodating almost 600 guests after the COVID-19 restrictions eased. This year, due to popular demand and interest from the community, a larger event will be held on October 29th 2022 at the Mirage Banquet Hall in Surrey. This event is organized in association with the Gujarati Association of BC. Everyone is invited to join this sparkling event to enjoy a unique lights show, traditional Diwali activities, and a festive cultural entertainment program lined up for the evening. We are expecting guests and attendees from all South Asian communities and other multicultural communities are welcome to join.  No celebration is complete without a sumptuous feast! At this event, you can expect to enjoy the lavish and delicious traditional Indian cuisine replete with savoury delights and sweetness galore. Aside from the food and festivities, V4U is keen to also support those less fortunate in the Metro Vancouver community. They are proud to raise funds and donations to support the work at the Greater Vancouver Food Bank as part of this mega Diwali event.  Diwali is celebrated as the victory of good over evil, the triumph of hope over despair. V4U invites our community to open our hearts and celebrate together in a generous spirit.  Get your tickets here!',
        longitude: '-122.730240',
        eventLocation: '17767 64 Avenue, Surrey, BC, Canada',
        eventContactPhone: '778-654-0987',
        eventImage: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/megaaDiwaliShow.jpeg?alt=media&token=8cac6aee-d95f-4e00-bbab-643b835d1f82',
        latitude: '49.118980',
        eventName: 'Mega Diwali Show',
        eventCategoryId: 3,
        eventContactEmail: 'megadiwalishow@gmail.com',
        eventDate: { seconds: 1667091600, nanoseconds: 765000000 }
    }
];


export const Default = () => <EventsList eventList={eventList} />
export const Error = () => <EventsList />
