import { CardList } from "../../components/organisms/blogCard";

export const homeMenuItems = [
  {
    value: 1,
    label: "Recommended for you",
    component: <CardList />,
  },
  {
    value: 2,
    label: "Trending",
    component: <CardList />,
  },
];
