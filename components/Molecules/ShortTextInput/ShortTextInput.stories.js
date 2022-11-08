import ShortTextInput from ".";


export default {
   title: 'Molecules/ShortTextInput',
   component: ShortTextInput,
};

export const NotRequired = () => <ShortTextInput label="Some Label" />;
export const Required = () => <ShortTextInput label="Some Label" required={true} />;