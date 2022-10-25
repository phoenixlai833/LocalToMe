import ShortTextInput from ".";


export default {
   title: 'ShortTextInput',
   component: ShortTextInput,
};

export const NotRequired = () => <ShortTextInput label="Some Label" />;
export const Required = () => <ShortTextInput label="Some Label" required={true} />;