import BlogCard from "../../components/organisms/blogCard/BlogCard";

export const profileTabMenu = [
  {
    value: 1,
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
  {
    value: 2,
    label: "Published",
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
    value: 3,
    label: "Drafts",
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
