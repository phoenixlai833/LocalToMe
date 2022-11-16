import NotificationSwitch from "./NotificationSwitch"

export default {
    title: "Atoms/NotifcationSwitch",
    component: NotificationSwitch
}

const obj = {
    txt: 'This is a Notificaton'
}

export const Default = (args) => <NotificationSwitch txt={obj}/>
export const Error = (args) => <NotificationSwitch />