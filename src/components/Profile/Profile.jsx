import PropTypes from "prop-types";
import { ProfileContainer,ImgProfile,DescriptionContainer,Username,Tag,Location,Status,LiStatus,Label,Quantity } from "./Profile.styled";


export const Profile = ({ avatar, username, tag, location, stats }) => {
    
  return <ProfileContainer>
  
    <DescriptionContainer>
      <ImgProfile
        src={avatar}
        alt="avatar"
        
      />
      <Username>{username}</Username>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionContainer>

    <Status>
      <LiStatus>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </LiStatus>
      <LiStatus>
        <Label>Views</Label>
        <Quantity >{stats.views}</Quantity>
      </LiStatus>
      <LiStatus>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </LiStatus>
    </Status>
  </ProfileContainer>
};


Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
  followers: PropTypes.number,
};