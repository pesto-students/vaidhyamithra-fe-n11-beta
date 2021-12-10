import BlogCard from "../../components/organisms/blogCard/BlogCard";

export const homeMenuItems = [
  { value: 1, label: "Recommended items", component: <BlogCard /> },
  { value: 2, label: "Saved", component: <div>Saved</div> },
  { value: 3, label: "Your Blogs", component: <div>yours</div> },
];
