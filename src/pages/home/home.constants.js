import { CardList } from "../../components/organisms/blogCard";
import LatestBlogs from "./LatestBlogs";

export const homeMenuItems = [
  {
    value: 1,
    label: "Latest",
    component: <LatestBlogs />,
  },
  {
    value: 2,
    label: "Recommended for you",
    component: <CardList />,
  },
];
