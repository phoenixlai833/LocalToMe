import { fontSize } from "@mui/system";
import FavoriteTab from "."

export default {
    title: 'Atoms/FavoriteTab',
    component: FavoriteTab,
};

const Template = (args) => <FavoriteTab {...args} />;

export const FoodBankTag = Template.bind({});
FoodBankTag.args = {
    txt: 'Food Bank',
    backgroundColor: "#108928",
    txtColor: "#FFFFFF",
    fontWeight: 500
};

export const EventTag = Template.bind({});
EventTag.args = {
    txt: 'Event',
    backgroundColor: "#FFB800",
    txtColor: "#000000",
    fontWeight: 700
}



