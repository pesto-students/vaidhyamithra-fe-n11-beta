import { CardList } from "../../components/organisms/blogCard";

export const profileTabMenu = [
  {
    value: 1,
    label: "Saved",
    component: <CardList />,
  },
  {
    value: 2,
    label: "Published",
    component: <CardList />,
  },
  {
    value: 3,
    label: "Drafts",
    component: <CardList />,
  },
];
