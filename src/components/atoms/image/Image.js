const Image = ({source, alt, ...otheProps}) => {
    return (
        <img src={`${source}`} alt={alt} {...otheProps}/>
    )
};

export default Image;