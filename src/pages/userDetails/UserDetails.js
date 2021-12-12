import manImg from "../../images/man_img.png";
import BlogCard from "../../components/organisms/blogCard";
import {PageContent, ProfileData, UserBlogs, ProfilePic } from "./userDetails.styled";

const UserDetails = () => {
    return (
        <PageContent>
            <ProfileData>
                <ProfilePic src={manImg}/>
                <p>
                    I am senior developer in Mansion house, 
                    Ye bidda idhi na Adda
                </p>
            </ProfileData>
            <UserBlogs>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </UserBlogs>
        </PageContent>
    )
}

export default UserDetails;