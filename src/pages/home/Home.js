import { useState } from "react";
import { TabMenu } from "../../components/organisms/tabs";
import { homeMenuItems } from "./home.constants";

const Home = () => {
  const [currentTab, setCurrentTab] = useState(homeMenuItems[0].value);

  return (
    <TabMenu
      value={currentTab}
      setValue={setCurrentTab}
      menuItems={homeMenuItems}
    />
  );
};

export default Home;
