import FeatherIcon from "feather-icons-react";

const Ficon = ({icon, clickHandler}) => {
    return (
        <FeatherIcon icon={icon} onClick={clickHandler}/>
    )
};

export default Ficon;
