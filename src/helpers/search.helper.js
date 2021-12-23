import { useDispatch, useSelector } from "react-redux";
import { search } from "../redux/features/search/search.slice";

export const useSearch = () => {
  const { searchText } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const dispatchSearch = (pageNumber) => {
    let searchObj = {
      searchText: searchText,
      pageNumber: pageNumber,
      pageSize: 5,
    };
    dispatch(search(searchObj));
  };

  return { dispatchSearch };
};
