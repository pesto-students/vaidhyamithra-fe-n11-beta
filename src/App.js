import { Outlet } from "react-router-dom";
import NavBar from "./components/organisms/navbar";
import RecommendedTopics from "./components/organisms/recommendedTopics/";

const App = () => {
  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <div>
        <RecommendedTopics />
      </div>
    </>
  );
};

export default App;
