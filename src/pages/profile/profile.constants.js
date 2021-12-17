import BlogCard from "../../components/organisms/blogCard/BlogCard";

export const profileTabMenu = [
  {
    value: 1,
    label: "Your Blogs",
    component: (
      <>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </>
    ),
  },
  {
    value: 2,
    label: "Saved",
    component: (
      <>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </>
    ),
  },
];
