import FeatherIcon from "feather-icons-react";

const Ficon = ({ icon, handleClick }) => {
  return <FeatherIcon icon={icon} onClick={handleClick} />;
};

export default Ficon;
