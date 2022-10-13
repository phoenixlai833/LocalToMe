import MapSlideUp from "./index"

export default {
    title: "MapSlideUp",
    component: MapSlideUp,
    argTypes: {
        data,
    }
}

export const Default = (args) => <MapSlideUp {...args} />
export const Error = (args) => <MapSlideUp {...args} />