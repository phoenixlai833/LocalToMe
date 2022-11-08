import GetDirectionGreenBtn from "./index";

export default {
  title: 'Atoms/GetDirectionGreenBtn',
  component: GetDirectionGreenBtn,
};


const address = "3700 Willingdon Ave, Burnaby, BC V5G 3H2"

export const Bigbtn = () => <GetDirectionGreenBtn address={address} onMap={false}/>;
export const SmBtn = () => <GetDirectionGreenBtn address={address} onMap={true}/>;
export const Error = () => <GetDirectionGreenBtn address={address} />


