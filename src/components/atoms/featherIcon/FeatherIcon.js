import FeatherIcon  from 'feather-icons-react';

const Ficon = ({icon}) => {
    console.log("Icon", icon);
    return (
        <FeatherIcon icon={icon}>
        </FeatherIcon> 
    )
};

export default Ficon;