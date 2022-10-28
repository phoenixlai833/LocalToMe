import NavBarIcons from ".";


export default {
   title: 'Atoms/NavBarIcons',
   component: NavBarIcons,
};

const Template = (args) => <div>
   <NavBarIcons icon="home" />
   <NavBarIcons icon="community" />
   <NavBarIcons icon="map" />
   <NavBarIcons icon="favourite" />
   <NavBarIcons icon="profile" />
</div>;
const ActiveTemplate = (args) => <div>
<NavBarIcons icon="home" active={true} />
<NavBarIcons icon="community" active={true} />
<NavBarIcons icon="map" active={true} />
<NavBarIcons icon="favourite" active={true} />
<NavBarIcons icon="profile" active={true} />
</div>;

export const Default = Template.bind({});
export const Active = ActiveTemplate.bind({});

Default.args = {
   icon: "home",
};