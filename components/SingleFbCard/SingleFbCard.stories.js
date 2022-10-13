import SingleFbCard from "./index"

export default {
    title: "SingleFbCard",
    component: SingleFbCard,
    argTypes: {
        data,
    }
}

export const Default = (args) => <SingleFbCard {...args} />
export const Error = (args) => <SingleFbCard {...args} />