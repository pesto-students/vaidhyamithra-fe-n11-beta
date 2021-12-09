import { useState } from "react";
import { TabMenu, TabPanel } from "../../components/organisms/tabs";
import { homeMenuItems } from "./home.constants";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(homeMenuItems[0].value);

  return (
    <>
      <TabMenu
        value={currentTab}
        setValue={setCurrentTab}
        menuItems={homeMenuItems}
      />
      {homeMenuItems.map(({ value, component }) => (
        <TabPanel key={value} value={value} currentValue={currentTab}>
          {component}
        </TabPanel>
      ))}
    </>
  );
};

export default Home;
