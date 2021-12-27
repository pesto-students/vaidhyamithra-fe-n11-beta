import { CardList } from "../../components/organisms/blogCard";

export const homeMenuItems = [
  {
    value: 1,
    label: "Latest",
    component: <CardList />,
  },
  {
    value: 2,
    label: "Recommended for you",
    component: <CardList />,
  },
];
