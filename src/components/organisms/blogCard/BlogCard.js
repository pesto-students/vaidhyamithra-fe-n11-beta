import Image from "../../atoms/image";
import Typography from '../../atoms/typography';
import manImg from "../../../images/man_img.png";
import { Card, CardContainer, BloggerDetails, Topic } from "./blogCard.styled";

const BlogCard = () => {
    return (
        <Card>
            <Image source={manImg} width= "400px" height= "320px" style={{borderRadius: "10px"}}/>
            <CardContainer>
                <div>
                    <Topic>
                        NEUROSCIENCE
                    </Topic>
                    <Typography variant="h2" sx={{fontWeight:700, mb:"10px"}}>
                        We need to index the haptic GB card.
                    </Typography>
                    <Typography variant="p" sx={{color:'#718797'}}>
                        If we navigate the port, we can get to the AGP microchip through the bluetooth SDD alarm.
                    </Typography>
                </div>
                <BloggerDetails>
                    <Image source={manImg} width= "46px" height = "46px" 
                        style={{borderRadius: "50%", padding: "2px"}}/>
                    <div>
                        <div>
                            <Typography variant="p" sx={{fontWeight:"bold"}}>
                                Darlene Robertson
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="p" sx={{fontSize:"12px", color:'#718797'}}>
                                March 12, 2021
                            </Typography>
                        </div>
                    </div>
                </BloggerDetails>
            </CardContainer>
        </Card>
    )
};

export default BlogCard;