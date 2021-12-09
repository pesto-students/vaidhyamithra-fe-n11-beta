import { ROUTES } from "./values/routes";
import { Link, Outlet } from "react-router-dom";
import NavBar from "./components/organisms/navbar";
import BlogCard from "./components/organisms/blogCard";
import apiUrl from "./api/apiUrl";
import { useEffect } from "react";
const App = () => {
  useEffect(() => {
    let data = {
      name:"Manirathnam",
      password:"Manirathnam123_"
    }
    apiUrl.post("login",data).then((res) => {
      console.log("Data from login:", res.data);
    })
  },[]);
  
  return (
    <>
      {/* <Link to={ROUTES.HOME}>Home</Link>
      <br />
      <Link to={ROUTES.LOGIN}>Login</Link>
      <br />
      <Link to={ROUTES.SIGNUP}>Signup</Link>
      <br />
      <Link to={ROUTES.NOT_FOUND}>NOT_FOUND</Link>
      <br />
      <Outlet /> */}
      <NavBar />
      <div>
        <Outlet />
      </div>
      <div>
        <BlogCard />
      </div>
    </>
  );
};

export default App;
