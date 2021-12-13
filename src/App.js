import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./values/routes";
import Login from "./components/organisms/login";
import SignUP from "./components/organisms/signUp";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import Home from "./pages/home";
import AppSkeleton from "./components/organisms/appSkeleton";
import Search from "./pages/searchBlog";

const App = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<AppSkeleton />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUP />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path="*" exact={true} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
