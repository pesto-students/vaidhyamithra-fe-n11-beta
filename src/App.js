import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./values/routes";
import Login from "./components/organisms/login";
import SignUP from "./components/organisms/signUp";
import LinearProgress from "./components/atoms/linearProgress";

const PageNotFound = lazy(() => import("./pages/pageNotFound/PageNotFound"));
const Home = lazy(() => import("./pages/home"));
const AppSkeleton = lazy(() => import("./components/organisms/appSkeleton"));
const Search = lazy(() => import("./pages/searchBlog"));
const EditBlog = lazy(() => import("./pages/editBlog"));
const Profile = lazy(() => import("./pages/profile"));

const App = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<AppSkeleton />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<SignUP />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.CREATE} element={<EditBlog />} />
          <Route path={ROUTES.MY_PROFILE} element={<Profile />} />
          <Route path="*" exact={true} element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
