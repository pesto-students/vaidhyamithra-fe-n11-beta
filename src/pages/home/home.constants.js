import LatestBlogs from "./LatestBlogs";
import RecommendedBlogs from "./RecommendedBlogs";

export const homeMenuItems = [
  {
    value: 1,
    label: "Latest",
    component: <LatestBlogs />,
  },
  {
    value: 2,
    label: "Recommended for you",
    component: <RecommendedBlogs />,
  },
];
