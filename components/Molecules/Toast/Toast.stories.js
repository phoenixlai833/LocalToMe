import Toast from "./Toast"

export default {
    title: 'Molecules/Toast',
    component: Toast,
}



export const Success = () => <Toast message="Your post has been uploaded!"/>
export const Error = () => 
<Toast message="Your post has failed to upload!" 
borderToast='#E24949'
bgToast='#FFF6F6'
txtcolor='#E24949'
imgsrc="/Mascot/Chou_Confused.svg"/>