import DeletePopup from "./index"

export default {
    title: "DeletePopup",
    component: DeletePopup,

}

export const Default = (args) => <DeletePopup {...args} />
export const Error = (args) => <DeletePopup />