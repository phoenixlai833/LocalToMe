import SharePost from ".";


export default {
    title: 'SharePost',
    component: SharePost,
};

const shareUrl = 'https://google/ghhhjjjjhhhjhj.com';

export const Template = () => <SharePost shareUrl={shareUrl} />;