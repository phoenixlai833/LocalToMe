export default function EventPreview({ event }) {

    const [navValue, setNavValue] = useState(1);
    const [confirmDelete, setConfirmDelete] = useState(false);
    const router = useRouter()

    const time = event.eventDate.seconds
    const date = new Date(time * 1000)
    const eventTime = date.toLocaleString().split(',')[1]
    const dateOfEvent = date.toLocaleString("default", { month: "long", day: "2-digit", year: "numeric" })
    const dateAndTime = dateOfEvent + "," + eventTime

    const handleDelete = (singleEventId) => async (e) => {
        {
            e.preventDefault();
            console.log(singleEventId);
            deleteEvent(singleEventId);
            router.push('/community')
        }
    };

    function onDelete() {
        setConfirmDelete(true);
    };

    function hidePopup() {
        setConfirmDelete(false);
    }


    return (
        <div>
            <TopBanner text={event.eventName} back={true} />

            <EventImageBlock >
                <EventImage src={event.eventImage} alt={event.eventName} />
                <FunctionsBox>
                    <AddToCalander />
                    <ShareLink />
                    <FavoriteBtn />
                </FunctionsBox>
            </EventImageBlock>

            <TextBubble text={[event.eventLocation, event.eventContactPhone, dateAndTime]} icon={['location_on', 'call', 'access_time']} />

            <div style={{ display: "flex", justifyContent: "space-between", margin: "0 5%" }}>
                <UserOfPost />
                <div>
                    <Link href={`/events/edit/${event.id}`}>
                        <div style={{ display: "flex" }}>
                            <img src="/Edit-icon.svg" alt="Edit Event" />
                            &nbsp;
                            <p>Edit Event</p>
                        </div>
                    </Link>
                    <div style={{ display: "flex" }}>
                        <img src="/Delete-icon.svg" alt="Delete Event" onClick={onDelete} />
                        &nbsp;
                        <p style={{ color: "red" }} onClick={onDelete}>Delete Event</p>
                    </div>
                </div>
            </div>


            <EventDescription>
                <b>About:</b>
                <p>{event.eventContent}</p>
            </EventDescription>

            <EventCategoryTag eventCategories={["Food", "Fundraiser"]} />

            <GetDirectionGreenBtn address={event.eventLocation} onMap={false} />

            <ExtraSpace></ExtraSpace>

            {confirmDelete && (
                <AbsPos>
                    <DeleteCont>
                        <h2 styles={{ paddingRight: "10%" }}>Are you sure you want to delete this posting? This cannot be undone.</h2>
                        <BtnCont>
                            <CancelBtn onClick={hidePopup}>Cancel</CancelBtn>
                            <a href={`/community`}>
                                <DeleteBtn onClick={handleDelete(event.id)}>Confirm</DeleteBtn>
                            </a>
                        </BtnCont>
                    </DeleteCont>
                </AbsPos>
            )}

            <NavBar value={navValue} onChange={(event, newValue) => {
                setNavValue(newValue);
            }} />
        </div >
    )
}