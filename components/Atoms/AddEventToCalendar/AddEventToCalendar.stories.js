import AddEventToCalendar from ".";


export default {
    title: 'Atoms/AddEventToCalendar',
    component: AddEventToCalendar,
};

const defaultEvent =
{
    id: 'I9lT7cikBpf1b8oFRiMW',
    end: '2022-12-31T00:45:00.000Z',
    eventCreatorId: {
        id: 'TYCuxDAHWBS0zuQZSmRb',
        favorite: { event: [Array], location: [Array] },
        image: '/AvatarChoices/Chou_Hype.png',
        name: 'Phoenix Lai',
        email: 'phoenixlai833@gmail.com',
        emailVerified: null
    },
    eventContent: 'Celebrate the 9th Annual CEFA New Westminster Winterfest Fundraiser supporting the Greater Vancouver Food Bank!\n' +
        '\n' +
        'CEFA New Westminster invites families to pack their ice skates and helmets* and join in on a joyful day of holiday fun at the Scotia Barn rink.\n' +
        '\n' +
        '*There will be rentals available!\n' +
        '\n' +
        'Admission to the event is by donation in support of the Greate Vancouver Food Bank. Attendees may donate online by visiting the link here: https://vfd.foodbank.bc.ca/fundraiser/cefanewwest',
    eventContactPhone: '6043245643',
    latitude: 49.2511125,
    eventName: 'CEFA New Westminster Annual Winterfest',
    eventTags: [
        {
            categoryName: 'Fundraiser',
            id: 'D1m7ubq7VZyQFbFAfisa',
            selected: true
        },
        { id: 'IL6FhCC8b2kCxoFlqkhX', categoryName: 'Event' }
    ],
    longitude: -122.9694595,
    eventImage: 'https://firebasestorage.googleapis.com/v0/b/localtome-f84e5.appspot.com/o/Screenshot%202022-11-23%20at%2012.33.12%20AM.png?alt=media&token=7a7665e2-5d05-4df8-bdff-dd41d2116d5e',
    eventLocation: '6501 Sprott Street, Burnaby, BC',
    eventUpdateDate: '2022-11-23T08:40:02.399Z',
    start: '2022-11-23T23:30:10.963Z',
    fileName: 'Screenshot 2022-11-23 at 12.33.12 AM.png'

}

export const Template = () => <AddEventToCalendar event={defaultEvent} />;