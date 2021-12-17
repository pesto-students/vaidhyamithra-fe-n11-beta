import BlogCard from "../../components/organisms/blogCard/BlogCard";

export const homeMenuItems = [
  {
    value: 1,
    label: "Recommended items",
    component: (
      <>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </>
    ),
  },
  {
    value: 2,
    label: "Trending",
    component: (
      <>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </>
    ),
  },
];
