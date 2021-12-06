import Login from "./components/organisms/login";
import SignUp from "./components/organisms/signUp";
import PageNotFound from "./pages/pageNotFound";

const App = () => {
  return (
    <div>
      <Login />
      <SignUp />
      <PageNotFound />
    </div>
  );
};

export default App;
