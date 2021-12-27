import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardList } from "../../components/organisms/blogCard";
import { getLatestBlogs } from "../../redux/features/home/home.slice";

const LatestBlogs = () => {
  const dispatch = useDispatch();
  const { latest, isLoading } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getLatestBlogs());
  }, [dispatch]);

  return <CardList blogs={latest} isLoading={isLoading} />;
};

export default LatestBlogs;
