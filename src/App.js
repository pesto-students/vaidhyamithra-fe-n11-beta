import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./values/routes";
import { LinearProgress } from "./components/atoms/progress";
import { PrivateRoute } from "./helpers";

const PageNotFound = lazy(() => import("./pages/pageNotFound/PageNotFound"));
const Home = lazy(() => import("./pages/home"));
const AppSkeleton = lazy(() => import("./components/organisms/appSkeleton"));
const Search = lazy(() => import("./pages/searchBlog"));
const EditBlog = lazy(() => import("./pages/editBlog"));
const Profile = lazy(() => import("./pages/profile"));
const BlogDetails = lazy(() => import("./pages/blogDetails"));
const BlogsByTag = lazy(() => import("./pages/blogsByTag"));

const App = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<AppSkeleton />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.BLOGS_BY_TAG} element={<BlogsByTag />} />
          <Route path={ROUTES.BLOG} element={<BlogDetails />} />
          <Route
            path={ROUTES.CREATE}
            element={
              <PrivateRoute>
                <EditBlog isCreateMode />
              </PrivateRoute>
            }
          />
          <Route
            path={ROUTES.EDIT_BLOG}
            element={
              <PrivateRoute>
                <EditBlog />
              </PrivateRoute>
            }
          />
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path="*" exact={true} element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
