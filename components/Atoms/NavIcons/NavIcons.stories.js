import NavBarIcons from ".";


export default {
   title: 'Atoms/NavBarIcons',
   component: NavBarIcons,
};

const Template = (args) => <div>
   <NavBarIcons icon="Home" />
   <NavBarIcons icon="Community" />
   <NavBarIcons icon="Map" />
   <NavBarIcons icon="Favourite" />
   <NavBarIcons icon="Profile" />
</div>;

const ActiveTemplate = (args) => <div>
   <NavBarIcons icon="Home" active={true} />
   <NavBarIcons icon="Community" active={true} />
   <NavBarIcons icon="Map" active={true} />
   <NavBarIcons icon="Favourite" active={true} />
   <NavBarIcons icon="Profile" active={true} />
</div>;

export const Default = Template.bind({});
export const Active = ActiveTemplate.bind({});

Default.args = {
   icon: "home",
};